import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  image: String,
  fullName: String,
  number: String,
  email: String,
  street: String,
  city: String,
  district: String,
});

export default mongoose.model("Profile", profileSchema);