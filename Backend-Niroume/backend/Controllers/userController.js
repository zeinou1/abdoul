import { Client } from "../Models/clientSchema.js";
import { Reservation } from "../models/ReservationSchema.js";
import Appointment from "../models/TimeSlotSchema.js";
import mongoose from "mongoose";
// CRUD operations for the user

export const udpdateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await Client.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: " update User successfully", data: updatedUser });
  } catch (err) {
    console.log("error to update user", err.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to update user, Try again later" });
  }
};
// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid User ID" });
  }

  try {
    const user = await Client.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user", err.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete user, try again later" });
  }
};
// getSIngle user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Client.findById(id).select("-password");
    res
      .status(200)
      .json({ success: true, message: "User fetched successfully", data: user });
  } catch (err) {
    console.log("error to get user", err.message);
    res.status(500).json({ success: false, message: "No user found, Try again later" });
  }
};
// get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await Client.find({}).select("-password");
    res
      .status(200)
      .json({ success: true, message: "Users fetched successfully", data: users });
  } catch (err) {
    console.log("error to get users", err.message);
    res.status(500).json({ success: false, message: "No user found, Try again later" });
  }
};
// get users profile

export const getUserProfile = async (req, res) => {
  const id = req.userId;
  console.log("idid", id);
  
  // Vérifiez si l'ID est un ObjectId valide
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID format" });
  }

  try {
    const user = await Client.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// get appointment for user
// export const getUserAppointments = async (req, res) => {
// 	const clientId = req.userId; // Supposons que l'ID du client est extrait du token JWT
  
// 	if (!mongoose.Types.ObjectId.isValid(clientId)) {
// 	  return res.status(400).json({ success: false, message: "Invalid client ID format" });
// 	}
  
// 	try {
// 	  // Récupérer les réservations du client
// 	  const reservations = await Reservation.find({ client: clientId });
  
// 	  if (!reservations.length) {
// 		return res.status(200).json({ success: true, message: "No reservations found", data: [] });
// 	  }
  
// 	  // Extraire les IDs des rendez-vous des réservations
// 	  const appointmentIds = reservations.map((reservation) => reservation.timeSlotId);
  
// 	  // Récupérer les rendez-vous correspondants
// 	  const appointments = await Appointment.find({ _id: { $in: appointmentIds } });
  
// 	  res.status(200).json({
// 		success: true,
// 		message: "Appointments retrieved successfully",
// 		data: appointments,
// 	  });
// 	} catch (err) {
// 	  console.error("Error fetching appointments:", err);
// 	  res.status(500).json({ success: false, message: "Internal server error" });
// 	}
//   };
// Assurez-vous que le chemin est correct

export const getUserAppointments = async (req, res) => {
  const clientId = req.userId; // Supposons que l'ID du client est extrait du token JWT

  if (!mongoose.Types.ObjectId.isValid(clientId)) {
    return res.status(400).json({ success: false, message: "Invalid client ID format" });
  }

  try {
    // Récupérer les réservations du client
    const reservations = await Reservation.find({ client: clientId }).populate('prestataire timeSlotId');

    if (!reservations.length) {
      return res.status(200).json({ success: true, message: "No reservations found", data: [] });
    }

    res.status(200).json({
      success: true,
      message: "Reservations retrieved successfully",
      data: reservations,
    });
  } catch (err) {
    console.error("Error fetching reservations:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// go to create route for userController.js
