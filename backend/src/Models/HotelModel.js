import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    website: { type: String }
});

export const HotelModel = mongoose.model('hotel', hotelSchema);