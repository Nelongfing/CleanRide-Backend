import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  package: {
    title: String,
    desc: String,
    value: Number,
  },
  vehicle: {
    vehicleType: String, // renamed from 'type'
    category: String,
    title: String,
    price: Number,
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
