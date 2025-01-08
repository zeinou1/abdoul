import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Image = mongoose.model("Image", imageSchema);
export default Image;
