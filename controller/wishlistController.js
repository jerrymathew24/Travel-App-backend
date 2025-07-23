import Wishlist from "../model/wishlist.model.js";

const createWishlistController = async (req, res) => {
  try {
    const newWishlistItem = new Wishlist(req.body);
    const savedWishlistItem = await newWishlistItem.save();
    res.status(201).json(savedWishlistItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding to wishlist", error: error.message });
    console.error("Error adding to wishlist:", error);
  }
}

const deleteWishlistController = async (req, res) => {
  try {
    const { id } = req.params;
    await Wishlist.findByIdAndDelete(id);
    res.status(200).json({ message: "Wishlist item deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting wishlist item", error: error.message });
    console.error("Error deleting wishlist item:", error);
  }
}

const getWishlistController =  async (req, res) => {
    try {
        const wishlistItems = await Wishlist.find();
        res.status(200).json(wishlistItems);
    } catch (error) {
        res.status(500).json({ message: "Error fetching wishlist", error: error.message });
        console.error("Error fetching wishlist:", error);
    }
}

export { createWishlistController, deleteWishlistController, getWishlistController };