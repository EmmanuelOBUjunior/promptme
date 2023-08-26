import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET(read)
export const GET = async (req, {params}) => {
    try {
        await connectToDB()
        const prompt = await Prompt.findById(params.id).populate('creator')

        if(!prompt) return new Response("Prompt Not Found", {status: 404})
        

        return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}


//PATCH(update)
export const PATCH = async (req, {params}) => {
   const {prompt, tag}  = await req.json()

   try {
        await connectToDB()
        const existingPrompt = await Prompt.findById(params.id)
        
   } catch (error) {
    
   }
}


//DELETE(remove/delete)