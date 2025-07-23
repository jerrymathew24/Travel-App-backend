import Hotel from "../model/hotel.model.js";

const singleHotelController =  async (req, res) => {
    try { 
        const {id} = req.params
        let hotel = await Hotel.findById(id);
        res.json(hotel);
    } catch (error) {
         res.status(404).json({ message: "Hotel not found" });
         console.log(`Error fetching hotel with ID ${req.params.id}:`, error);
    }
}

export default singleHotelController;