import express from "express";
import {
  createTimeSlot,
  updateTimeSlot,
  getTimeSlots,
  deleteTimeSlot,
  getAllTimeSlots,
  getAvailableTimeSlots
} from "../Controllers/timeSlotController.js";
import {authenticate, restrict} from "../auth/verifyToken.js";

const router = express.Router();
router.post("/time", authenticate, createTimeSlot);
router.get("/", authenticate,restrict(["admin","prestataire"]),getAllTimeSlots);
router.get("/:id", authenticate,restrict(["prestataire"]), getTimeSlots);
router.put("/:id", authenticate, restrict(["prestataire"]), updateTimeSlot);
router.delete("/:id", authenticate, restrict(["prestataire"]), deleteTimeSlot);
router.get("/available", authenticate, getAvailableTimeSlots);
export default router;

