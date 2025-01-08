import { Prestataire } from "../Models/prestataireSchema.js";
import Appointment from "../models/TimeSlotSchema.js";
import { Service } from "../models/serviceSchema.js";
import { Reservation } from "../models/ReservationSchema.js";
import mongoose from "mongoose";

// CRUD operations for the prestataire

// Update prestataire
export const updatePrestataire = async (req, res) => {
  const id = req.params.id;
  const { serviceName } = req.body; // Supposons que serviceName est passé dans le corps de la requête
  console.log(`ID du prestataire: ${id}`);
  console.log(`Nom du service reçu: ${serviceName}`);
  try {
    let serviceId = null;

    // Rechercher le service par nom
    if (serviceName) {
      const service = await Service.findOne({ name: serviceName });
      if (!service) {
        return res.status(404).json({
          success: false,
          message: "Service non trouvé",
        });
      }
      serviceId = service._id;
    }

    // Mettre à jour le prestataire
    const updatedPrestataire = await Prestataire.findByIdAndUpdate(
      id,
      {
        $set: req.body,
        ...(serviceId && { $addToSet: { services: serviceId } }), // Utiliser $addToSet pour éviter les doublons
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Prestataire mis à jour avec succès",
      data: updatedPrestataire,
    });
  } catch (err) {
    console.log("Erreur lors de la mise à jour du prestataire", err.message);
    res.status(500).json({
      success: false,
      message: "Échec de la mise à jour du prestataire, réessayez plus tard",
    });
  }
};

// Delete prestataire
export const deletePrestataire = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Prestataire ID" });
  }

  try {
    const prestataire = await Prestataire.findByIdAndDelete(id);
    if (!prestataire) {
      return res.status(404).json({ success: false, message: "Prestataire not found" });
    }

    res.status(200).json({ success: true, message: "Prestataire deleted successfully" });
  } catch (err) {
    console.error("Error deleting prestataire", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to delete prestataire, try again later",
    });
  }
};

// Get single prestataire
export const getSinglePrestataire = async (req, res) => {
  const id = req.params.id;

  try {
    const prestataire = await Prestataire.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "client", // Assurez-vous que c'est le bon chemin vers le client dans votre schéma Review
        select: "name photo createdAt", // Assurez-vous que ces champs existent dans votre schéma Client
      },
    })
      .populate("services")
      .populate("appointments")
      .select("-password");
    const appointments = await Appointment.find({ prestataire: id });

    // Ajouter les appointments au prestataire
    prestataire.appointments = appointments;

    res.status(200).json({
      success: true,
      message: "Prestataire fetched successfully",
      data: prestataire,
    });
  } catch (err) {
    console.log("Error fetching prestataire", err.message);
    res
      .status(500)
      .json({ success: false, message: "No prestataire found, Try again later" });
  }
};

// Get all prestataires
export const getAllPrestataires = async (req, res) => {
  try {
    //search for services and appointments
    const { query } = req.query;
    let prestataires;
    if (query) {
      prestataires = await Prestataire.find({
        isApproved: "approved",
        $or: [
          {
            name: {
              $regex: query,
              $options: "i",
            },
          },
          {
            specialization: {
              $regex: query,
              $options: "i",
            },
          },
          {
            appointments: {
              $regex: query,
              $options: "i",
            },
          },
        ],
      })
      .populate('services') // Peupler les services
      .select("-password");
    } else {
      prestataires = await Prestataire.find({})
        .populate('services') // Peupler les services
        .select("-password");
    }

    res.status(200).json({
      success: true,
      message: "Prestataires fetched successfully",
      data: prestataires,
    });
  } catch (err) {
    console.log("Error fetching prestataires", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch prestataires, try again later",
    });
  }
};
// featured search prestate by service name
export const getFeaturedPrestate = async (req, res) => {
  const { services } = req.query;

  if (!services) {
    return res.status(400).json({ error: "Le service est requis dans la requête." });
  }

  try {
    console.log("Recherche pour le service:", services);
    const service = await Service.findOne({ name: services });

    if (!service) {
      return res.status(404).json({ error: "Service introuvable." });
    }
    console.log("Service trouvé :", service);

    const prestataires = await Prestataire.find({
      services: { $in: [new mongoose.Types.ObjectId(service._id)] },
    }).populate("services");

    if (prestataires.length === 0) {
      return res.status(404).json({ error: "Aucun prestataire trouvé pour ce service." });
    }

    return res.status(200).json({
      success: true,
      message: "Prestataires trouvés.",
      data: prestataires,
    });
  } catch (err) {
    console.error("Erreur pendant la récupération :", err);
    res.status(500).json({
      success: false,
      message: "Erreur interne du serveur.",
      error: err.message,
    });
  }
};
// get the profile of the prestataire
export const getProfilePrest = async (req, res) => {
  const id = req.userId;

  try {
    // Chercher le prestataire et peupler les services
    const prestataire = await Prestataire.findById(id)
      .populate("services")
      .select("-password");
    const appointments = await Appointment.find({ prestataire: id });

    // Ajouter les appointments au prestataire
    prestataire.appointments = appointments;
    // Récupérer les réservations directement
    const reservations = await Reservation.find({ prestataire: id }).populate({
      path: "client", // Peupler le client associé à chaque réservation
      select: "name email photo", // Sélectionner uniquement les champs nécessaires du client
    });

    // Ajouter les réservations au prestataire
    prestataire.reservations = reservations;

    res.status(200).json({
      success: true,
      message: "Profile infos getting",
      data: prestataire,
    });
  } catch (err) {
    console.log("Error fetching prestataire profile", err.message);
    res.status(500).json({
      success: false,
      message: "No prestataire profile found, Try again later",
    });
  }
};

// get reservations for the prestataire

export const getReservationsPrest = async (req, res) => {
  const id = req.userId;

  try {
    // Cherche les appointments pour ce prestataire
    const appointments = await Appointment.find({ prestataire: id }).populate({
      path: "reservations", // Peupler les réservations
      populate: {
        path: "client", // Peupler le client associé à chaque réservation
        select: "name email photo", // Sélectionner uniquement les champs nécessaires du client
      },
    });

    // Si le prestataire n'a pas d'appointments ou de réservations
    if (!appointments || appointments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Aucune réservation trouvée pour ce prestataire",
      });
    }

    // Retourner les appointments avec les réservations et clients peuplés
    res.status(200).json({
      success: true,
      message: "Réservations du prestataire récupérées avec succès",
      data: appointments,
    });
  } catch (err) {
    console.log(
      "Erreur lors de la récupération des réservations du prestataire",
      err.message
    );
    res.status(500).json({
      success: false,
      message: "Échec de la récupération des réservations, réessayez plus tard",
    });
  }
};

// go to create route for prestataireController.js
