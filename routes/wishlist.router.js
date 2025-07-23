import express from "express";
const router = express.Router();
import verifyUser from "../middleware/verifyUser.js";
import {
  createWishlistController,
  deleteWishlistController,
  getWishlistController,
} from "../controller/wishlistController.js";

router.post("/", verifyUser, createWishlistController);

router.delete("/:id", verifyUser, deleteWishlistController);

router.get("/", verifyUser, getWishlistController);

export default router;
