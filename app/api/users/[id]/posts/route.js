import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (req) =>{
    try {
        await connectToDB()
    } catch (error) {
        
    }
}