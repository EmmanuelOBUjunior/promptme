import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: '',
        })
    ],
    async session({session}){

    },
    async signIn(profile){

    }
})