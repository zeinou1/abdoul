import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';


// import routes auth, dans middleware
import authRoute from './Routes/auth.js';
// import routes user, dans middleware
import userRoute from './Routes/user.js';
// import routes prestataire, dans middleware
import prestataireRoute from './Routes/presta.js';
// review route
import reviewRoute from './Routes/review.js';
// services route
import serviceRoute from './Routes/service.js';
// timeSlot route
import timeSlotRoute from './Routes/timeSlote.js';
// reservation route
import reservationRoute from './Routes/reservation.js';
// service admin route

// upload route
import uploadRoute from './routes/upload.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
       origin: 'http://localhost:5173',  // Remplacez par le domaine de votre front-end
     optionsSuccessStatus: 200
}
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.get('/', (req, res) => {
  res.send('API is running....');
})
// Vérification des variables d'environnement
if (!process.env.MONGO_URI) {
  throw new Error("La variable d'environnement MONGO_URI est manquante !");
}
// 5. Connect to MongoDB-1
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
	 await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	 });
	 console.log("Database connected successfully");
  } catch (err) {
	 console.log("MongoDB database connection failed. Exiting now...");
  }
}
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
// Routes auth
app.use('/api/v1/auth', authRoute); //domain/api/v1/auth/register
// Routes user
app.use('/api/v1/users', userRoute); //domain/api/v1/user/
// Routes prestataire
app.use('/api/v1/prestataires', prestataireRoute); //domain/api/v1/prestataire/update

// Routes service
app.use('/api/v1/services', serviceRoute); //domain/api/v1/service/update
// timeSlot route
app.use('/api/v1/tsm', timeSlotRoute); //domain/api/v1/timeSlot/update
// reservation route
app.use('/api/v1/reservations', reservationRoute); //domain/api/v1/reservation/update
// route admin service
// upload route
app.use('/api/v1/uploads', uploadRoute); //domain/api/v1/upload/upload
// tabs by service id



// Test API
app.listen(port, () => {
  // Connect to MongoDB-2
  connectDB();
  console.log("Server is running on port" + port);
})