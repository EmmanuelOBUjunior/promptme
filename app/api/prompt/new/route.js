import { connectToDB } from "@utils/database"


export const POST = async (req) =>{
    const {userId, prompt, tag} = await req.json();

    try{
        
    }catch(error){
        console.log(error)
    }

}