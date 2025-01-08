import mongoose from "mongoose";
// Booking Model

const bookingSchema = new mongoose.Schema(
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
      min: 0, // validation supplémentaire pour éviter les valeurs négatives
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export {Booking};
