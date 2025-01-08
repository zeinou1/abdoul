import Appointment from "../models/TimeSlotSchema.js";
import {Reservation} from "../models/ReservationSchema.js";
import Joi from "joi";
import {Prestataire} from "../models/PrestataireSchema.js";
import {Client} from "../models/ClientSchema.js";


// Create a new reservation

const createReservationSchema = Joi.object({
  client: Joi.string().required(),
  prestataire: Joi.string().required(), // ID du prestataire
  timeSlotId: Joi.string().required(),
  date: Joi.date().iso().required(), // Date en format ISO
  startTime: Joi.string().required(),
  endTime: Joi.string().required(),
});

export const createReservation = async (req, res) => {
  const {error, value} = createReservationSchema.validate(req.body);
  if (error) {
	 return res.status(400).json({error: error.details[0].message});
  }

  const {client, timeSlotId, date, startTime, endTime} = value;

  try {
	 const timeSlot = await Appointment.findById(timeSlotId);
	 if (!timeSlot || !timeSlot.isAvailable) {
		return res.status(400).json({error: "Créneau non disponible."});
	 }

	 const newReservation = await Reservation.create({
		client,
		prestataire: timeSlot.prestataire,
		timeSlotId,
		date,
		startTime,
		endTime,
	 });

	 timeSlot.isAvailable = false;
	 timeSlot.reservations.push(newReservation._id);
	 await timeSlot.save();

	 // Mettre à jour le prestataire avec l'ID de la réservation
	 await Prestataire.findByIdAndUpdate(
		timeSlot.prestataire, // ID du prestataire
		{
		  $push: { appointments: newReservation._id }, // Ajouter la réservation au tableau appointments
		},
		{ new: true } // Retourne le document mis à jour
	 );
	 // Met à jour les "appointments" du client
	 await Client.findByIdAndUpdate(
		client,
		{ $push: { appointments: newReservation._id } }, // Ajoute également l'ID au client
		{ new: true }
	 );
	 res.status(201).json(newReservation);
  } catch (err) {
	 console.error(err);
	 res.status(500).json({error: "Erreur serveur."});
  }
};



// cancel a reservation
export const cancelReservation = async (req, res) => {
  const {id} = req.params;

  try {
	 const reservation = await Reservation.findByIdAndDelete(id);
	 if (!reservation) {
		return res.status(404).json({error: "Réservation non trouvée."});
	 }

	 // Rendre le timeSlot disponible à nouveau
	 const timeSlot = await Appointment.findOne({
		reservations: reservation._id,
	 });

	 if (timeSlot) {
		timeSlot.isAvailable = true;
		timeSlot.reservations = timeSlot.reservations.filter(
		  (resId) => resId.toString() !== id
		);
		await timeSlot.save();
	 }

	 res.status(200).json({message: "Réservation annulée et timeSlot rendu disponible."});
  } catch (err) {
	 console.error(err);
	 res.status(500).json({error: "Erreur lors de l'annulation de la réservation."});
  }
};
// get available time slots
