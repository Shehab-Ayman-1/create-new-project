import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

import { Users } from "@/server/models";
import { DBConnection } from "@/server/configs";

type User = {
   id: string;
   image: string;
   name: string;
   email: string;
};

const handler = NextAuth({
   // Configure one or more authentication providers
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID || "",
         clientSecret: process.env.GITHUB_SECRET || "",
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_ID || "",
         clientSecret: process.env.GOOGLE_SECRET || "",
      }),
   ],
   callbacks: {
      async session({ session }) {
         // store the user id from MongoDB to session
         if (session && session.user) {
            const user = await Users.findOne({ email: session.user.email });
            (session.user as User).id = user._id.toString();
         }
         return session; // The return type will match the one returned in `useSession()`
      },
      async signIn({ account, profile, user, credentials }) {
         try {
            await DBConnection();

            const exist = await Users.findOne({ email: user?.email });
            if (exist) return true;

            await Users.create({ email: user.email, name: user.name, image: user.image });
            return true;
         } catch (error) {
            console.log("Error checking if user exists: ", (error as any).message);
            return false;
         }
      },
   },
});

export { handler as GET, handler as POST };
