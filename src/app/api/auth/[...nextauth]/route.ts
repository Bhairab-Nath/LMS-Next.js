import connectDB from "@/src/database/connection";
import User from "@/src/database/models/user.schema";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async signIn({user}): Promise<boolean> {

            try {
                await connectDB()
                const existingUser = await User.findOne({email:user.email})

                if(!existingUser) {
                    await User.create({
                        username: user.name,
                        email: user.email,
                        profileImage: user.image   
                    })

                }
                return true
                
            }catch(error){
                console.log("Error in signIn callback:", error)
                return false
            }

        }
    }
});


export { handler as GET, handler as POST };