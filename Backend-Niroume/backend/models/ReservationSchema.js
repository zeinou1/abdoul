import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
	 client: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Client", // Clé étrangère vers le client
		required: true,
	 },
	 prestataire: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Prestataire", // Clé étrangère vers le prestataire
		required: true,
	 },
	 timeSlotId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Appointment", // Référence au créneau
		required: true,
	 },
	 date: {
		type: Date,
		required: true,
	 },
	 startTime: {
		type: String, // Par exemple, format "HH:mm"
		required: true,
	 },
	 endTime: {
		type: String, // Par exemple, format "HH:mm"
		required: true,
	 },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export {Reservation};