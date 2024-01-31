"use server";
import LoginForm from "@/components/molecules/Forms/LoginForm/LoginForm";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await hasSession();
  console.log("inside page ", session);
  return (
    <>
      <div className="flex flex-shrink">
        <LoginForm />
      </div>
    </>
  );
}

export const hasSession = async () => {
  const session = await getServerSession(authOptions);
  console.log("session stuff ", session);
  return session;
};
