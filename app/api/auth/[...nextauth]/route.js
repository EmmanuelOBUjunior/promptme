import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from "@utils/database";
import User from "@models/User";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){
        
    },
    async signIn(profile){
        try {
            await connectToDB();


            //Check if the user already exists
            const userExists = await User.findOne({email: profile.email});

            //If not, create a new user
            if(!userExists){
                User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                    })
            }


            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})