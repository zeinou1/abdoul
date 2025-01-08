import {Prestataire} from "../models/PrestataireSchema.js";
import {Client} from "../models/ClientSchema.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
// Get the token from the header
  const authToken = req.headers.authorization;
  // Check if token exists
//   if (!authToken || !authToken.startsWith("Bearer ")) {
// 	 return res.status(401).json({success: false, message: "Non, token Access Denied"});
//   }
  if (!authToken || !authToken.startsWith("Bearer ")) {
	return res.status(401).json({ success: false, message: "Token Access Denied" });
  }
  

//   const token = req.headers.authorization 
// 	? req.headers.authorization.split("Bearer ")[1]?.trim()
// 	: req.cookies.accessToken;
  
// 	if (!token) {
// 	  return res.status(401).json({ success: false, message: "Non token" });
// 	}
  try {
	 const token = authToken.split(" ")[1];
	 // Verify token
	 const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
	 req.userId = decoded.id;
	 req.role = decoded.role;
	 next();

  } catch (err) {
	 console.log("Error token", err.message);
	 if (err.name === "TokenExpiredError") {
		return res.status(401).json({success: false, message: "Token Expired"});
	 }
	 return res.status(401).json({success: false, message: "Invalid Token"});

  }
}

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;
 
  

  if (!userId) {
	 return res.status(401).json({ success: false, message: "User ID is missing" });
  }

  try {
	 // Rechercher l'utilisateur dans la base de données
	 const user = await Client.findById(userId) || await Prestataire.findById(userId);

	 if (!user || !user.role) {
		return res.status(404).json({ success: false, message: "User not found or role is missing" });
	 }

	 // Vérification des rôles
	 if (!roles.includes(user.role)) {
		return res.status(403).json({ success: false, message: "You are not authorized to access this route" });
	 }
	
	 next();
  } catch (err) {
	 console.error("Error fetching user:", err.message);
	 return res.status(500).json({ success: false, message: "Server error" });
  }
};


// go to testing the verifyToken in the routes/userRoutes.js

