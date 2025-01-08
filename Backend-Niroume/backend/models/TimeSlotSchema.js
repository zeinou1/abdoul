import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  prestataire: {type: mongoose.Schema.Types.ObjectId, ref: "Prestataire", required: true},
  day: {type: String, required: true}, // e.g., "Monday"
  startTime: {type: String, required: true}, // e.g., "09:00"
  endTime: {type: String, required: true},   // e.g., "12:00"
  isAvailable: {type: Boolean, default: true},
  reservations: [{ type: mongoose.Types.ObjectId, ref: "Reservation" }], // Réservations associées
}, {timestamps: true});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;

