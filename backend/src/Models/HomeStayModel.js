import mongoose from "mongoose";

const homeStaySchema = new mongoose.Schema({
    name: { type: String, required: true },
    street: { type: String, required: true, lowercase: true },
    city: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, lowercase: true, unique: true},
    phone: { type: String, required: true, lowercase: true, unique: true }
});

export const HomeStayModel = mongoose.model('home_stay', homeStaySchema);