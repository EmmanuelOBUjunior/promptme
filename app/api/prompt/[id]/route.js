import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET(read)
export const GET = async(req, {params}) => {
    try {
        await connectToDB()
        const prompt = await Prompt.findById({params.id}).populate('creator')

        if(!prompt) return new Response("Prompt Not Found", )
        

        return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}


//PATCH(update)



//DELETE(remove/delete)