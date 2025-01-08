import express from "express";

import {
  deletePrestataire,
  getAllPrestataires,
  getSinglePrestataire,
  updatePrestataire,
  getFeaturedPrestate,
  getProfilePrest,
  getReservationsPrest
  

} from "../Controllers/prestataireController.js";
import {authenticate, restrict} from "../auth/verifyToken.js";
import reviewRoute from "./review.js";
const router = express.Router();
// nested route
router.use("/:prestataireId/reviews", reviewRoute);
router.get("/", getAllPrestataires);
// get profile for prestataire
router.get("/profile", authenticate, restrict(["prestataire"]),getProfilePrest);
router.get("/reservation", authenticate, restrict(["prestataire"]),getReservationsPrest);
router.get("/:id", getSinglePrestataire);
router.put("/:id", authenticate, restrict(['prestataire']), updatePrestataire);
router.delete("/:id", authenticate, restrict(['prestataire']), deletePrestataire);
router.get("/featured/search", getFeaturedPrestate);
export default router;

// go to insert route for index.js

//next reviewControllers.js
// <outlet> permet de faire des sous routes react-router-dom