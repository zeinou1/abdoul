import {Review} from "../models/ReviewSchema.js";
import {Prestataire} from "../models/PrestataireSchema.js";
import mongoose from "mongoose";
import Joi from "joi";
// get all reviews

export const getAllReviews = async (req, res) => {
  try {
	 const reviews = await Review.find({});
	 res.status(200).json({
		success: true,
		message: "Successfully fetched all reviews",
		data: reviews
	 });
  } catch (error) {
	 console.log('Error in getAllReviews', error.message);
	 res.status(404).json({success: false, message: "Failed  reviews not found"});
  }
}

// create a review




export const createReview = async (req, res) => {
  // Schéma de validation
  const schema = Joi.object({
	 prestataire: Joi.string(),
	 client: Joi.string(),
	 reviewText: Joi.string().min(5).required(),
	 rating: Joi.number().min(1).max(5).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
	 return res.status(400).json({ success: false, message: error.details[0].message });
  }

  // Compléter les champs manquants
  if (!req.body.prestataire) req.body.prestataire = req.params.prestataireId;
  if (!req.body.client) req.body.client = req.userId;

  // Vérifier les IDs
  if (!mongoose.Types.ObjectId.isValid(req.body.prestataire)) {
	 return res.status(400).json({ success: false, message: "Invalid prestataire ID format" });
  }

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
	 const prestataire = await Prestataire.findById(req.body.prestataire);
	 if (!prestataire) {
		await session.abortTransaction();
		return res.status(404).json({ success: false, message: "Prestataire not found" });
	 }

	 const newReview = new Review(req.body);
	 const savedReview = await newReview.save({ session });

	 prestataire.reviews.push(savedReview._id);
	 await prestataire.save({ session });

	 await session.commitTransaction();
	 session.endSession();

	 res.status(201).json({
		success: true,
		message: "Review created successfully",
		data: savedReview,
	 });
  } catch (error) {
	 await session.abortTransaction();
	 session.endSession();
	 console.error("Error in createReview", error.message);
	 res.status(400).json({ success: false, message: "Failed to create review" });
  }
};
// go to create route for reviewController.js