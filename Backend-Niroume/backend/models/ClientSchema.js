import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  username: {type: String, required: true},
  phone: {type: String},
  photo: {type: String},
  role: {
	 type: String,
	 enum: ["client", "admin"],
	 default: "client",
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  gender: {type: String, enum: ["fille", "garçon"]},
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reservation" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
}, {timestamps: true});

const Client = mongoose.models.Client || mongoose.model("Client", ClientSchema);

export {Client};
