import express from "express";
import {
  udpdateUser,
  getSingleUser,
  deleteUser,
  getAllUsers,
  getUserProfile,
  getUserAppointments

} from "../Controllers/userController.js";
// verifyToken
import { authenticate, restrict } from "../auth/verifyToken.js";
// route export
const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUsers);
// get user profile
router.get("/profile", authenticate, restrict(["client"]),getUserProfile);

router.get("/:id", authenticate, restrict(["client"]), getSingleUser);
router.put("/:id", authenticate, restrict(["client"]), udpdateUser);
router.delete("/:id", authenticate, restrict(["client"]), deleteUser);
// get appointment for user
router.get("/appointment/my-appointments", authenticate, restrict(["client"]), getUserAppointments);
export default router;
// go to insert route for user.js
