import express from "express";

import {createReview, getAllReviews} from "../Controllers/reviewConroller.js";
import {authenticate, restrict} from "../auth/verifyToken.js";

const router = express.Router({mergeParams: true});
//prestataire/prestataireId/reviews
router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["client"]),createReview);

export default router;
// go to import in index.js