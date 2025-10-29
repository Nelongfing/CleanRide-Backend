import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Booking from "../models/booking.js";

const router = express.Router();

// Create a booking
router.post("/", protect, async (req, res) => {
  try {
    const { package, vehicle, location, total } = req.body;
    const booking = await Booking.create({
      userId: req.user.id,
      package,
      vehicle,
      location,
      total,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all bookings for a user
router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update booking status (e.g., after PayPal payment)
router.patch("/:id", protect, async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
