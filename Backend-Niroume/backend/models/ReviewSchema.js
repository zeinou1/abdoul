import mongoose from "mongoose";
import {Prestataire} from "./PrestataireSchema.js";

const reviewSchema = new mongoose.Schema({
  prestataire: { type: mongoose.Schema.Types.ObjectId, ref: "Prestataire" },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client', // Assurez-vous que 'Client' est bien le modèle correct
  },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
}, { timestamps: true });


reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path:"client",
      select: "name photo"
  });
   next();
})

reviewSchema.statics.calculateAverageRating = async function (prestataireId) {
  // This points to the current review
  const stats = await this.aggregate([
    { $match: { prestataire: prestataireId } },
    {
      $group: {
        _id: "$prestataire",
        avgRating: { $avg: "$rating" },
        numReviews: { $sum: 1 },
      },
    },
  ]);

  if (stats.length > 0) {
    await Prestataire.findByIdAndUpdate(prestataireId, {
      averageRating: stats[0].avgRating,
      totalRating: stats[0].numReviews,
    });
  } else {
    await Prestataire.findByIdAndUpdate(prestataireId, {
      averageRating: 0,
      totalRating: 0,
    });
  }

  console.log(stats);
};

reviewSchema.post("save", function () {
  this.constructor.calculateAverageRating(this.prestataire);
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export { Review}