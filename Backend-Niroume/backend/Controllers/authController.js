//import User model
import { Prestataire } from "../models/PrestataireSchema.js";
import { prestataireValidationSchema } from "../models/PrestataireSchema.js";
import { Client} from "../models/ClientSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateAuthToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "30d" }
  );
}; // generate token in the file .env

// create login and register controllers
export const register = async (req, res) => {
  // Use req.body for validation
  const { error } = prestataireValidationSchema.validate(req.body, { abortEarly: false });
  if (error) {
    // Return validation errors
    return res
      .status(400)
      .json({ errors: error.details.map((detail) => detail.message) });
  }

  const { name, username, email, password, role, gender, photo } = req.body;

  // Vérifiez que tous les champs requis sont fournis
  if (!name || !username || !email || !password || !role || !gender) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Vérifiez que le rôle est valide
  if (role !== "client" && role !== "prestataire" && role !== "admin") {
    return res
      .status(400)
      .json({ error: "Le rôle n'existe pas. Veuillez choisir un rôle valide !" });
  }

  try {
    // Vérifiez si le username ou l'email existe déjà
    let existingUser = await Client.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: "Prénom ou email existes!" });
    }

    // Vérifiez si l'utilisateur existe déjà spécifiquement par rôle
    let userCheck = null;
    if (role === "prestataire") {
      userCheck = await Prestataire.findOne({ email });
    } else if (role === "client") {
      userCheck = await Client.findOne({ email });
    }

    if (userCheck) {
      return res.status(400).json({
        error: "L'email ou l'utilisateur existe déjà dans un de ces roles ! 🚶🏿 ",
      });
    }

    // Hachez le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Instanciation du nouvel utilisateur
    let user = null;
    if (role === "client") {
      user = new Client({
        name,
        username,
        email,
        password: hashedPassword,
        gender,
        role,
        photo,
      });
    } else if (role === "prestataire") {
      user = new Prestataire({
        name,
        username,
        email,
        password: hashedPassword,
        role,
        photo,
        gender,
      });
    } else if (role === "admin") {
      user = new Client({
        name,
        username,
        email,
        password: hashedPassword,
        role,
        photo,
        gender,
      });
    }

    // Vérifiez que l'utilisateur (`user`) a bien été créé avant de continuer
    if (!user) {
      return res.status(400).json({ error: "User object was not created successfully" });
    }

    // Sauvegarde du nouvel utilisateur dans la base de données
    await user.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error during user registration:", err.message);
    res.status(500).json({
      success: false,
      message: "Internal server error, Try again later",
    });
  }
};

// Login controller

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = null;
    const client = await Client.findOne({ email });
    const prestataire = await Prestataire.findOne({ email });

    if (client) {
      user = client;
    }
    if (prestataire) {
      user = prestataire;
    }
    // check if user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(404)
        .json({ status: false, message: " L'utilisateur n'existe pas" });
    }
    // user already connected
    if (user.isLoggedIn) {
      return res.status(404).json({ error: "User is already logged in" });
    }
    user.isLoggedIn = true;
    await user.save();
    // update user data
    user._doc.password = undefined;
    user._doc.appointments = undefined;
    user._doc.isLoggedIn = undefined;
    user._doc.updatedAt = undefined;
    user._doc.__v = undefined;
    user._doc.createdAt = undefined;
    user._doc.id = undefined;

    // get token
    const token = generateAuthToken(user);
    const { password: userPassword, role, appointments, ...rest } = user._doc;
    // if user is pending approval
    if (
      (user.role === "client" && user.isPendingApproval) ||
      (user.role === "prestataire" && user.isPendingApproval)
    ) {
      return res
        .status(403)
        .json({ error: "L'utilisateur est toujours en attente d'approbation." });
    }
    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    console.error("Error during user Login:", err.message);
    res.status(500).json({ success: false, message: "Failed to login, Try again later" });
  }
};
