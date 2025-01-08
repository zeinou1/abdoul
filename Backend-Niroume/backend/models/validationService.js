import Joi from "joi";

// Validation pour les détails des services à l'intérieur des rubriques (tab)
const serviceDetailValidationSchema = Joi.object({
  name: Joi.string().optional(), // Nom du service
  image: Joi.string().optional(), // Image du service
});

// Validation pour les rubriques (tabs)
const tabValidationSchema = Joi.object({
  name: Joi.string().optional(), // Nom de l'onglet/rubrique
  image: Joi.string().required(), // Image de l'onglet
  services: Joi.array().items(serviceDetailValidationSchema).optional(), // Liste de services
});

// Validation pour le service principal (entité complète avec name, description, etc.)
const serviceSchema = Joi.object({
  name: Joi.string().required(), // Nom principal
  description: Joi.string().optional(), // Description générale
  prestataire: Joi.string().optional(), // ID du prestataire (String attendu)
  image: Joi.string().required(), // Image principale
  duration: Joi.number().optional(), // Durée (le cas échéant)
  tabs: Joi.array().items(tabValidationSchema).optional(), // Liste des rubriques
});

export {serviceSchema};