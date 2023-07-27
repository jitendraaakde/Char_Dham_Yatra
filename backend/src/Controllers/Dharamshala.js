import { StatusCodes } from "http-status-codes";
import { DharamshalaModel } from "../Models/DharamshalaModel.js";

export async function saveDharamshala(request, response) {
    try {
        const dharamshala = new DharamshalaModel(request.body);
        const savedDharamshala = await dharamshala.save();
        response.status(StatusCodes.CREATED).json(savedDharamshala)
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    }
}

export async function fetchAllDharamshala(request, response) {
    try {
        const dharam = await DharamshalaModel.find();
        response.status(StatusCodes.OK).json(dharam)
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    }
}

export async function fetchDharamshalaByCity(request, response) {
    try {
        const dharam = await DharamshalaModel.find({ city: request.params.city });
        response.status(StatusCodes.OK).json(dharam);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function deleteDharamshalaById(request, response) {
    try {
        const dharam = await DharamshalaModel.findByIdAndDelete(request.params.id);
        response.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}