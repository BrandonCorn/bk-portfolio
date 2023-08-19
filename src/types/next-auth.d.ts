import { DefaultSession, Session} from "next-auth";

//name and email already part of default next-auth session.user object
//here we augment the sessions user data
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    } & DefaultSession["user"]
  }
}


