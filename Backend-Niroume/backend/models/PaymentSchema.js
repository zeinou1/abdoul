import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    prestataire: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prestataire",
      required: true,
    },
    Client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: false,
    },
    ticketPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    appointmentDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > new Date();
        },
        message: "La date de rendez-vous doit être dans le futur.",
      },
    },
    timeSlot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TimeSlot",
      required: true,
    },
    duration: {
      type: Number,
      default: 30,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment", // Référence à une entité Payment
      required: false, // Facultatif tant qu’il n'y a pas eu de paiement
    },
    cancelReason: {
      type: String, // Optionnel : raison d'annulation
      required: function () {
        return this.status === "cancelled";
      },
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export {Reservation};