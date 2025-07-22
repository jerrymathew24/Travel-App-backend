import express from "express";
const router = express.Router();
import Category from "../model/category.model.js";

router.get("/", async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Error fetching categories" });
    }
})

export default router;