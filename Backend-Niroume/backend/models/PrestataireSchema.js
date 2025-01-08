// backend/models/PrestataireSchema.js
import mongoose from "mongoose";
import Joi from "joi";

// Define the Mongoose schema
const prestataireSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  phone: { type: String },
  photo: { type: String },
  adresse: { type: String }, 
  région: { type: String }, 
  ville: { type: String }, 
  ticketPrice: { type: Number },
  role: { type: String, enum: ["prestataire", "admin"], default: "prestataire" },
  gender: { type: String, enum: ["fille", "garçon"] },
  specialization: { type: String },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
  reservations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reservation"
  }],
  experiences: [
    {
      company: { type: String, required: true },
      years: { type: Number, required: true, min: 0 },
    },
  ],
  bio: { type: String, maxlength: 100 },
  about: { type: String },
  timeSlots: [{ type: mongoose.Schema.Types.ObjectId, ref: "TimeSlot" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  averageRating: { type: Number, min: 0, max: 5, default: 0 },
  totalRating: { type: Number, min: 0, default: 0 },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
});

// Mongoose middleware
prestataireSchema.pre("remove", async function (next) {
  try {
    // Supprimer tous les services liés à ce prestataire
    await mongoose.model("Service").deleteMany({ prestataire: this._id });
    next();
  } catch (err) {
    next(err);
  }
});

// Define the Joi validation schema
const prestataireValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "L'email doit être valide.",
    "any.required": "L'email est obligatoire.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Le mot de passe doit contenir au moins 6 caractères.",
    "any.required": "Le mot de passe est obligatoire.",
  }),
  name: Joi.string().required().messages({
    "any.required": "Le nom est obligatoire.",
  }),
  username: Joi.string().required().messages({
    "any.required": "Le nom d'utilisateur est obligatoire.",
  }),
  phone: Joi.string().optional(),
  photo: Joi.string().optional(),
  adresse: Joi.string().optional(),
  region: Joi.string().optional(),
  ville: Joi.string().optional(),
  ticketPrice: Joi.number().optional(),
  role: Joi.string().valid("prestataire", "admin", "client").default("Prestataire"),
  gender: Joi.string().valid("fille", "garçon").required().messages({
    "any.only": 'Le genre doit être "fille" ou "garçon".',
    "any.required": "Le genre est obligatoire.",
  }),
  specialization: Joi.string().optional(),
  services: Joi.array().items(Joi.string().hex().length(24)).optional(),
  reservations: Joi.array().items(Joi.string().hex().length(24)).optional(),
  experiences: Joi.array()
    .items(
      Joi.object({
        company: Joi.string().required(),
        years: Joi.number().integer().min(0).required(),
      })
    )
    .optional(),
  bio: Joi.string().max(100).optional(),
  about: Joi.string().optional(),
  timeSlots: Joi.array().items(Joi.string().hex().length(24)).optional(),
  reviews: Joi.array().items(Joi.string().hex().length(24)).optional(),
  averageRating: Joi.number().min(0).max(5).default(0),
  totalRating: Joi.number().integer().min(0).default(0),
  isApproved: Joi.string().valid("pending", "approved", "cancelled").default("pending"),
  appointments: Joi.array().items(Joi.string().hex().length(24)).optional(),
});

// Create the Mongoose model
const Prestataire =
  mongoose.models.Prestataire || mongoose.model("Prestataire", prestataireSchema);

export {Prestataire,prestataireValidationSchema};
