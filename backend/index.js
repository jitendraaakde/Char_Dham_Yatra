import express from "express";
import cors from "cors";
import 'dotenv/config';
import router from "./src/Routers/Router.js";
import { configureDb } from "./src/Configs/DbConfig.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router)

app.listen(process.env.SERVER_PORT, () =>{
    configureDb();
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
})
