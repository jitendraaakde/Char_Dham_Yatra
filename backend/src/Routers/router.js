import express from "express";
import { deleteDharamshalaById, fetchAllDharamshala, fetchDharamshalaByCity, saveDharamshala } from "../Controllers/Dharamshala.js";
import { fetchAllHomeStay } from "../Controllers/HomeStay.js";
import { deleteHotelById, fetchAllHotel, fetchHotelByCity, saveHotel } from "../Controllers/HotelController.js";
import { deleteAgentById, fetchAgentByCity, fetchAllAgent, saveAgent } from "../Controllers/travelingAgent.js";

const router = express.Router();

/**Hotel Routes */
router.post('/hotel/create', saveHotel);
router.get('/hotel/all', fetchAllHotel);
router.get('/hotel/:city', fetchHotelByCity);
router.delete('/hotel/:id', deleteHotelById);

/**Dharamshala Routes */
router.post('/dharamshala/create', saveDharamshala);
router.get('/dharamshala/all', fetchAllDharamshala);
router.get('/dharamshala/:city', fetchDharamshalaByCity);
router.delete('/dharamshala/:id', deleteDharamshalaById);

/**Agent Routes */
router.post('/agent/createagent', saveAgent);
router.get('/agent/all', fetchAllAgent);
router.get('/agent/:city', fetchAgentByCity);
router.delete('/agent/:id', deleteAgentById);

router.get('/homestay/all', fetchAllHomeStay);

export default router;