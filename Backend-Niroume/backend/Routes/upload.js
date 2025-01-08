import express from "express";
import multer from "multer";
import path from "path";
import Image from "../models/Image.js";
import cors from 'cors';
const app = express();
const router = express.Router();

// Configuration de Multer (stockage des fichiers)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // Dossier où stocker les fichiers
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Renommer le fichier
  },
});

const upload = multer({ storage });
app.use(cors());
// Servir les fichiers statiques du dossier "uploads"
app.use('/uploads', express.static('uploads'));

// Route POST pour uploader une image
router.post("/", upload.single("image"), async (req, res) => {
  console.log(req.file);  // Affiche les infos du fichier
  console.log(req.body);
  try {
    const newImage = new Image({
      name: req.body.name,
      image: req.file.path,  // Enregistrer le chemin du fichier
    });

    await newImage.save();
    // Retourner l'URL de l'image
    res.status(201).json({ 
      message: "Image uploadée avec succès !",
      imageUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;