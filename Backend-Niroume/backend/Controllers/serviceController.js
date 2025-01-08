import { Prestataire } from "../models/PrestataireSchema.js";
import { Service } from "../models/ServiceSchema.js";
import mongoose from "mongoose";
import { serviceSchema } from "../models/validationService.js";

const allServices = [
  "Bricolage",
  "Aide à domicile",
  "Cours particuliers",
  "Informatiques",
  "Ménage",
];
// create service
export const createService = async (req, res) => {
  // Validation à l'aide de Joi
  const { name, description, duration, prestataire, tabs,image } = req.body;
  const { error } = serviceSchema.validate(req.body);
  console.log("req.body", req.body);
  if (error) {
    const message =
      error.details && error.details[0]?.message
        ? error.details[0].message
        : "Invalid input data.";
    return res.status(400).json({ success: false, message });
  }

  // Vérifiez services
  if (!allServices.includes(name)) {
    return res.status(400).json({
      success: false,
      message:
        "Ce service n'est pas autorisé. Veuillez choisir parmi : bricolage, aide à domicile, cours particuliers, informatiques, ménage.",
    });
  }

  // Commencez la transaction MongoDB
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Si un prestataire est fourni, vérifiez qu'il est valide
    if (prestataire) {
      const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
      if (!isValidObjectId(prestataire)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Prestataire ID format" });
      }

      // Vérifiez si le prestataire existe
      const existingPrestataire = await Prestataire.findById(prestataire);
      if (!existingPrestataire) {
        return res.status(404).json({ success: false, message: "Prestataire not found" });
      }

      // Vérifiez si le prestataire est déjà inscrit à un service
      const existingService = await Service.findOne({ prestataire });
      if (existingService) {
        return res.status(400).json({
          success: false,
          message: "Le prestataire est déjà inscrit à un service.",
        });
      }
    }

    // Créez le nouveau service avec tabs inclus
    const newService = new Service({
      name,
      description,
      image,
      duration,
      prestataire: prestataire || null, // Assurez-vous que le prestataire est null si non fourni
      tabs, // Ajouter ici les tabs envoyés dans la requête (facultatif)
    });

    // Sauvegardez le service dans la base de données
    const savedService = await newService.save({ session });

    // Si un prestataire est fourni, mettez à jour le prestataire avec le nouveau service
    if (prestataire) {
      await Prestataire.findByIdAndUpdate(
        prestataire,
        { $push: { services: savedService._id } },
        { new: true, session }
      );
    }

    // Confirmez la transaction
    await session.commitTransaction();
    await session.endSession();

    // Répondez avec succès
    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: savedService,
    });
  } catch (err) {
    // Annulez la transaction en cas d'erreur
    await session.abortTransaction();
    await session.endSession();
    console.error("Error creating service", err.message);

    res.status(500).json({
      success: false,
      message: "Failed to create service, try again later",
      error: err.message,
    });
  }
};





// update service
export const updateService = async (req, res) => {
  const serviceId = req.params.id;
  const allowedUpdates = ["name", "description", "duration", "prestataire"];
  const updates = Object.keys(req.body).reduce((obj, key) => {
    if (allowedUpdates.includes(key)) {
      obj[key] = req.body[key];
    }
    return obj;
  }, {});
  try {
    // Trouver l'ancien service
    const existingService = await Service.findById(serviceId);
    if (!existingService) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }

    // Gérer si le champ `prestataire` est mis à jour
    if (
      updates.prestataire &&
      updates.prestataire !== String(existingService.prestataire)
    ) {
      // Vérifier le nouvel ID prestataire
      if (!mongoose.Types.ObjectId.isValid(updates.prestataire)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Prestataire ID" });
      }

      const newPrestataire = await Prestataire.findById(updates.prestataire);
      if (!newPrestataire) {
        return res
          .status(404)
          .json({ success: false, message: "New Prestataire not found" });
      }

      // Supprimer l'ancien lien
      await Prestataire.findByIdAndUpdate(existingService.prestataire, {
        $pull: { services: serviceId },
      });

      // Ajouter le lien au nouveau prestataire
      await Prestataire.findByIdAndUpdate(updates.prestataire, {
        $push: { services: serviceId },
      });
    }

    // Mettre à jour le service
    const updatedService = await Service.findByIdAndUpdate(serviceId, updates, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (err) {
    console.error("Error updating service:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update service",
      error: err.message,
    });
  }
};
// delete service
export const deleteService = async (req, res) => {
  const serviceId = req.params.id; // ID du service à supprimer
  const { prestataire } = req.body;
  try {
    /**/

    // Trouver le service avant la suppression pour accéder au `prestataire`
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }

    // Retirer le service des services du prestataire
    await Prestataire.findByIdAndUpdate(service.prestataire, {
      $pull: { services: serviceId },
    });

    // Supprimer le service dans MongoDB
    await Service.deleteOne({ _id: serviceId });

    res.status(200).json({ success: true, message: "Service deleted successfully" });
  } catch (err) {
    console.error("Error deleting service:", err);
    res.status(500).json({
      success: false,
      message: "Failed to delete service",
      error: err.message,
    });
  }
};
// get all services
export const getAllServicesWithPrestataire = async (req, res) => {
  try {
    // Récupérer tous les services et inclure les détails des prestataires et des images
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const services = await Service.find({})
      .populate("prestataire", "name email phone")
      .populate("image") // Assurez-vous que le champ 'images' est correct
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Services fetched successfully with prestataire and image details",
      data: services,
    });
  } catch (err) {
    console.error("Error fetching services", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch services, try again later",
    });
  }
};
// get services by singleprestataire
export const getServicesByPrestataire = async (req, res) => {
  const prestataireId = req.params.prestataireId;
  try {
    // Récupérer les services
    const services = await Service.find({ prestataire: prestataireId });
    res.status(200).json({
      success: true,
      message: "Services fetched successfully",
      data: services,
    });
  } catch (err) {
    console.error("Error fetching services", err.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch services, try again later" });
  }
};

// Récupérer un service spécifique par prestataire, tab et item
export const getSpecificService = async (req, res) => {
  const { prestataireId, tabId, itemId } = req.params;

  try {
    // Récupérer les services du prestataire
    const services = await Service.find({ prestataire: prestataireId });

    // Parcourir chaque service pour chercher dans les tabs
    const foundService = services
      .flatMap((s) => s.tabs)
      .find((t) => t._id.toString() === tabId || t.name === tabId);

    if (!foundService) {
      return res.status(404).json({ message: "Onglet non trouvé" });
    }

    // Rechercher l'élément spécifique dans le tab
    const item = foundService.services.find(
      (i) => i._id.toString() === itemId || i.name === itemId
    );

    if (!item) {
      return res.status(404).json({ message: "Article non trouvé" });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error("Erreur lors de la récupération du service :", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};
// getservices by id
export const getServiceById = async (req, res) => {
  const serviceId = req.params.serviceId;
  console.log("🔍 ID reçu:", serviceId);  // 1. Log de l'ID
  
  try {
    const service = await Service.findById(serviceId)
    
      .populate({
        path: 'tabs.services',
        select: 'name image',
      });

    console.log("🛠️ Service trouvé:", service);  // 2. Log du service trouvé
    
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (err) {
    console.error("❌ Erreur lors de la récupération :", err.message);
    res.status(500).json({ success: false, message: "Failed to fetch service" });
  }
};
//tabs route
export const getTabsByServiceId = async (req, res) => {
  try {
    const services = await Service.find({}, 'tabs'); // On récupère uniquement les onglets
    const allTabs = services.flatMap(service => service.tabs);  // Combine tous les onglets

    res.status(200).json({
      success: true,
      message: "Tabs fetched successfully",
      data: allTabs,
    });
  } catch (err) {
    console.error("Error fetching tabs", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tabs, try again later",
    });
  }
};


