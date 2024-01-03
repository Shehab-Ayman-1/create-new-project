import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import { ADMIN, USER } from "@/constants";

import { Users } from "@/server/models";
import { DBConnection } from "@/server/configs";

type User = {
   id?: string;
   image: string;
   name: string;
   email: string;
};

type CredentialsProps = User & {
   process: "login" | "register";
   role: "Admin" | "User";
   password: string;
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
      CredentialsProvider({
         name: "Credentials",
         credentials: {},
         async authorize(credentials) {
            const { process, image, name, email, password, role } = credentials as CredentialsProps;

            if (process === "login") {
               const user = await Users.findOne({ email: email.trim() });
               if (!user) return null;

               const compare = await bcrypt.compareSync(password, user.password);
               if (!compare) return null;

               return user;
            }

            if (process === "register") {
               const exist = await Users.findOne({ email });
               if (exist) return null;

               const hash = await bcrypt.hashSync(password, 10);
               const uRole = role === "Admin" ? ADMIN : USER;

               const user = await Users.create({ image, name, email, role: uRole, password: hash });
               return user;
            }
            return null;
         },
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
      async signIn({ account, profile, email, user }) {
         try {
            await DBConnection();
            console.log({ account, profile, email, user });

            const exist = await Users.findOne({ email: user?.email });
            if (exist) return true;

            await Users.create({ image: user.image, email: user.email, name: user.name, role: USER });
            return true;
         } catch (error) {
            console.log("Error checking if user exists: ", (error as any).message);
            return false;
         }
      },
   },
   pages: {
      signIn: "/auths/login",
   },
});

export { handler as GET, handler as POST };
