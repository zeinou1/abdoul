import mongoose from "mongoose";
import Joi from "joi";
// Sous-schéma pour les détails d'un service dans une rubrique ("Petites Réparations", etc.)
const serviceDetailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
});
// Sous-schéma pour une rubrique (tab), avec une liste de services
const tabSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  services: [serviceDetailSchema],
});
// Schéma principal pour un type de service
const allowedServices = [
  "Bricolage",
  "Aide à domicile",
  "Cours particuliers",
  "Informatiques",
  "Ménage",
];;
const serviceSchema = new mongoose.Schema(
  {
    name: Joi.string()
      .valid(...allowedServices) // Seules ces valeurs sont acceptées
      .required(),
    description: { type: String, required: false },
    image: { type: String },
    duration: { type: Number },
    prestataire: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prestataire",
      required: false,
    },
    tabs: [tabSchema],
  },
  { timestamps: true }
);

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export { Service };

// service prestataires
