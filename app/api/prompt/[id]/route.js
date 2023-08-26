import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET(read)
export const GET = async(req) => {
    try {
        await connectToDB()
        const prompts = await Prompt.find({}).populate('creator')
        

        return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}


//PATCH(update)



//DELETE(remove/delete)