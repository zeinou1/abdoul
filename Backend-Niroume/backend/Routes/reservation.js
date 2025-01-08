import express from "express";
import {cancelReservation,createReservation} from "../Controllers/reservationController.js";
import {authenticate, restrict} from "../auth/verifyToken.js";

const router = express.Router();



router.post("/booking",authenticate,restrict(["client"]), createReservation);
router.delete("/:id",authenticate, cancelReservation);
export default router;