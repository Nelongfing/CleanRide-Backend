import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  package: {
    title: String,
    desc: String,
    value: Number,
  },
  vehicle: {
    type: String,
    category: String,
    title: String,
  },
  location: {
    latitude: Number,
    longitude: Number,
    distance: Number,
    fee: Number,
  },
  total: { type: Number, required: true },
  status: { type: String, enum: ["pending", "paid", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
