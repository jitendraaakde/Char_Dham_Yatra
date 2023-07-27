import { StatusCodes } from "http-status-codes";
import { HomeStayModel } from "../Models/HomeStayModel.js";

export async function fetchAllHomeStay(request, response) {
    try {
        const stay = await HomeStayModel.find();
        response.status(StatusCodes.OK).json(stay);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    }
}