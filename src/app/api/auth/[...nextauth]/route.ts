import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "@/lib/nextAuth";


const handler = NextAuth(authOptions) as NextAuthOptions;

export { handler as GET, handler as POST };

//add logic for callbacks https://next-auth.js.org/configuration/options#callbacks
