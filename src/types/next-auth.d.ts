import { DefaultSession, Session} from "next-auth";

//here we augment the sessions user data
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
    } & DefaultSession["user"]
  }
}


