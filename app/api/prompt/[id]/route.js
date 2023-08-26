import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET(read)
export const GET = async(req) => {
    try {
        await connectToDB()


    } catch (error) {
        
    }
}


//PATCH(update)



//DELETE(remove/delete)