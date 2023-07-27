import { StatusCodes } from "http-status-codes";
import { HotelModel } from "../Models/HotelModel.js";

export async function saveHotel(request, response) {
    try {
        const hotel = await HotelModel(request.body);
        const savedHotel = await hotel.save();
        response.status(StatusCodes.CREATED).json(savedHotel);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    }
}

export async function fetchAllHotel(request, response) {
    try {
        const hotel = await HotelModel.find();
        response.status(StatusCodes.CREATED).json(hotel);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    }
}

export async function fetchHotelByCity(request, response) {
    try {
        const hotel = await HotelModel.find({ city: request.params.city });
        response.status(StatusCodes.CREATED).json(hotel);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    }
}

export async function deleteHotelById(request, response) {
    try {
        const hotel = await HotelModel.findByIdAndDelete(request.params.id);
        response.status(StatusCodes.CREATED).json(hotel);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    }
}