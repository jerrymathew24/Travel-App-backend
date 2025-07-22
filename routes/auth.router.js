import express from "express";
const router = express.Router();
import User from "../model/user.model.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET_KEY
      ).toString(),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
    console.error("Error registering user:", error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ number: req.body.number });
    if (!user) {
      return res.status(401).json("Invalid number");
    }
    const decodedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    if (decodedPassword !== req.body.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // Hide password in response
    const { password, ...rest } = user._doc;
    // Generate JWT token for token based authentication
    const accessToken = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET_KEY
    );

    return res.status(200).json({
      ...rest,
      accessToken,
    });

  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
    console.error("Error logging in:", error);
  }
});
export default router;
