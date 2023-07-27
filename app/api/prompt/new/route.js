import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";

export const POST = async (req) =>{
    const {userId, prompt, tag} = await req.json();

    try{
        await connectToDB();
        const newPrompt = new Prompt({
            author: userId,
            tag
        })
        await newPrompt.save()

    }catch(error){
        console.log(error)
    }

}