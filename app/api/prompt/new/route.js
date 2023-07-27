import { connectToDB } from "@utils/database"


export const POST = async (req) =>{
    const {userId, prompt, tag} = await req.json();

    try{
        await connectToDB();
        const newPrompt = new Prompt({
            author: userId,
            tag
        })

    }catch(error){
        console.log(error)
    }

}