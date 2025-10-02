import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Profile from "../models/profile.js";

const router = express.Router();

// Get logged in user's profile
router.get("/", protect, async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create/Update profile
router.post("/", protect, async (req, res) => {
  try {
    const { image, fullName, number, email, street, city, district } = req.body;

    let profile = await Profile.findOne({ userId: req.user.id });
    if (profile) {
      // update existing
      profile.image = image;
      profile.fullName = fullName;
      profile.number = number;
      profile.email = email;
      profile.street = street;
      profile.city = city;
      profile.district = district;
      await profile.save();
    } else {
      // create new
      profile = await Profile.create({
        userId: req.user.id,
        image,
        fullName,
        number,
        email,
        street,
        city,
        district,
      });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
