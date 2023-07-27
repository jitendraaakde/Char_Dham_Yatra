import 'dotenv/config';
import mongoose from 'mongoose';

export async function configureDb() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DB_URL);
        console.log("Db Connect!");
    } catch (error) {
        console.log(error);
    }       
}