import { StatusCodes } from "http-status-codes";
import { AgentModel } from "../Models/travelingAgentModel.js";

export async function saveAgent(request, response) {
    try {
        const agent = new AgentModel(request.body);
        const savedAgent = await agent.save();
        response.status(StatusCodes.CREATED).json(savedAgent);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}


export async function fetchAllAgent(request, response) {
    try {
        const agent = await AgentModel.find();
        response.status(StatusCodes.OK).json(agent);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function fetchAgentByCity(request, response) {
    try {
        const agent = await AgentModel.find({ city: request.params.city });
        response.status(StatusCodes.OK).json(agent);
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function deleteAgentById(request, response) {
    try {
        const agent = await AgentModel.findByIdAndDelete(request.params.id);
        response.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}