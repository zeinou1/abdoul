import Appointment from "../models/TimeSlotSchema.js";
import { Prestataire } from "../models/PrestataireSchema.js";
import Joi from "joi";

//validation

const timeSlotValidationSchema = Joi.object({
  prestataire: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
  // Vérifie que le prestataire est un ObjectId valide (24 caractères hexadécimaux)

  day: Joi.string()
  .valid("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche")
  .required(), // Valide les jours de la semaine autorisés

  startTime: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(), // Vérifie que startTime suit le format HH:mm (exemple : "09:00")

  endTime: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required() // Vérifie que endTime suit le format HH:mm (exemple : "12:00")

    .custom((value, helpers) => {
      const { startTime } = helpers.state.ancestors[0];
      if (startTime && value <= startTime) {
        return helpers.error("endTime must be greater than startTime");
      }
      return value; // Passe s'il est valide
    }),

  isAvailable: Joi.boolean().default(true), // Valide le champ isAvailable comme un booléen
});
const getDayNameFromDate = (dateString) => {
  const date = new Date(dateString);
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  return days[date.getUTCDay()];
};

// create time slot
export const createTimeSlot = async (req, res) => {
   // Extraire le jour de la semaine à partir de la date
   if (req.body.date) {
    req.body.day = getDayNameFromDate(req.body.date);
  }
  const { error, value } = timeSlotValidationSchema.validate(req.body);
  const { prestataire, day, startTime, endTime, isAvailable } = req.body;
  console.log("ID prestataire reçu :", prestataire);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    // Vérifiez si le prestataire existe
    const existingPrestataire = await Prestataire.findById(prestataire);
    if (!existingPrestataire) {
      return res.status(404).json({ error: "Prestataire non trouvé" });
    }

    // Vérifiez si le timeSlot existe déjà
    const existingTimeSlot = await Appointment.findOne({
      prestataire,
      day,
      startTime,
      endTime
    });

    if (existingTimeSlot) {
      return res.status(409).json({ error: "Ce créneau horaire existe déjà." });
    }

    // Créez le timeSlot avec le prestataire
    const timeSlot = await Appointment.create({
      prestataire, // L'ID (ObjectId) du prestataire
      day,
      startTime,
      endTime,
      isAvailable,
    });

    // Ajouter l'ID du timeSlot au champ timeSlots du prestataire
    existingPrestataire.timeSlots.push(timeSlot._id);
    await existingPrestataire.save();

    return res
      .status(201)
      .json({ success: true, message: "Créneau ajouté avec succès", data: timeSlot });
  } catch (err) {
    console.error("Erreur lors de la création du timeSlot", err.message);
    return res.status(500).json({ error: "Erreur lors de la création du timeSlot." });
  }
};

// get time slot
export const getTimeSlots = async (req, res) => {
  try {
    const timeSlots = await Appointment.find()
      .populate("prestataire", "nom email")
      // Récupère uniquement le nom et l'email du prestataire

      .exec();

    return res.status(200).json(timeSlots);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Erreur lors de la récupération des timeSlots" });
  }
};

// update time slot
export const updateTimeSlot = async (req, res) => {
  const id = req.params.id;
  const updates = req.body; // Données à mettre à jour depuis le client
  try {
    const updatedTimeSlot = await Appointment.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedTimeSlot) {
      return res.status(404).json({ success: false, message: "TimeSlot non trouvé" });
    }
    return res.status(200).json({
      success: true,
      message: "TimeSlot mis à jour avec succès",
      data: updatedTimeSlot,
    });
  } catch (err) {
    console.error("Erreur lors de la mise à jour du timeSlot", err.message);
    return res.status(500).json({ error: "Erreur lors de la mise à jour du timeSlot." });
  }
};
// delete time slot
export const deleteTimeSlot = async (req, res) => {
  const id = req.params.id; // ID du TimeSlot à supprimer
  try {
    const timeSlot = await Appointment.findById(id);
    if (!timeSlot) {
      return res.status(404).json({ success: false, message: "TimeSlot non trouvé" });
    }
    await timeSlot.deleteOne(); // Supprimer le TimeSlot
    return res
      .status(200)
      .json({ success: true, message: "TimeSlot supprimé avec succès" });
  } catch (err) {
    console.error("Erreur lors de la suppression du timeSlot:", err.message);
    return res.status(500).json({ error: "Erreur lors de la suppression du timeSlot." });
  }
};
// get all time slots
export const getAllTimeSlots = async (req, res) => {
  try {
    const timeSlots = await Appointment.find();
    return res.status(200).json({ success: true, data: timeSlots });
  } catch (err) {
    console.error("Erreur lors de la récupération des timeSlots", err.message);
    return res
      .status(500)
      .json({ error: "Erreur lors de la récupération des timeSlots." });
  }
};
// get available time slots
export const getAvailableTimeSlots = async (req, res) => {
  try {
    const timeSlots = await Appointment.find({ isAvailable: true }).populate(
      "prestataire"
    );
    res.status(200).json(timeSlots);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des créneaux disponibles." });
  }
};
