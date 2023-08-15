import NextAuth, { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";

//custom providers described here https://next-auth.js.org/configuration/providers/credentials
export const authOptions: NextAuthOptions = {
  //configure one or more auth providers
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID || "",
    //   clientSecret: process.env.GITHUB_SECRET || "",
    // }),
    // DiscordProvider({
    //   clientId: process.env.DISCORD_CLIENT_ID || "",
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "username" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/auth/signin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const user = await res.json();

        //no error and user exists
        if (res.ok && user) {
          return user;
        }
        //no valid user
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

//add logic for callbacks
