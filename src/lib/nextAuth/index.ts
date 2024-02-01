import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import prisma from '../prismaDb';


//custom providers described here https://next-auth.js.org/configuration/providers/credentials

/**
 * authOptions is the configuration necessary for NextAuth
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  //configure one or more auth providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "username" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signin`, {
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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }){

      return session;
    },
    async signIn({
      user, account
    }){
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/accounts/get-account?userId=${user.id}`);
      if(res.ok){
        const existingAccount = await res.json();
        const wrongProvider = existingAccount.provider === account?.provider ? true : false
        if(wrongProvider) return true;
        else return false;
      }
      else{
        return '/auth/signin'
      }
    }
  }, 
  session: {
    strategy: 'jwt'
  }
}


export type ProviderInfo = {
  name: string;
  logo: string;
}

export type ProviderList = {
  [key: string]: ProviderInfo;
}


/**
 * List of the providers for within components where we want to render content about them
 */
export const providersList: ProviderList = {
  github: {
    name: 'GitHub',
    logo: ''
  },
  discord: {
    name: 'Discord',
    logo: ''
  }
}