import express from "express";
import {authenticate,restrict} from "../auth/verifyToken.js";
import {
  createService,
  getAllServicesWithPrestataire,
  updateService,
  deleteService, getServicesByPrestataire,
  getSpecificService,
  getServiceById,
  getTabsByServiceId
} from "../Controllers/serviceController.js";

const router = express.Router();

// Route pour créer un service
router.post("/create",authenticate, createService);

// Route pour récupérer tous les services (avec les détails des prestataires)
router.get("/",getAllServicesWithPrestataire);

// Route pour récupérer les services d'un seul prestataire
router.get("/:prestataireId", authenticate,getServicesByPrestataire);

// Route pour mettre à jour un service
router.put("/update/:serviceId",authenticate,restrict(["prestataire"]),  updateService);
// get single service
router.get("/servicesearch/:serviceId",getServiceById);
// get tabs by service id
router.get("/tabs", getTabsByServiceId);



// Route pour supprimer un service
router.delete("/:serviceId",authenticate,restrict(["prestataire"]) ,deleteService);

router.get("/:service/:prestataireId/:tabId/:itemId", authenticate, getSpecificService);

export default router;
