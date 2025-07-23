import express from "express";
import Category from "../model/category.model.js";
import categories from "../data/categories.js";

const router = express.Router();

// Route to import category data
router.post("/", async (req, res) => {
  try {
    await Category.deleteMany({}); // Clear existing category data before importing new data
    console.log("Importing category data...");
    const categoriesInDb = await Category.insertMany(categories.data);
    res.json(categoriesInDb)
  } catch (error) {
    console.error("Error importing category data:", error);
    res.status(500).json({ message: "Error importing data" });
  }
});

export default router;
