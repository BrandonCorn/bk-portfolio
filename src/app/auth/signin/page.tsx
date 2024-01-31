"use server";
import LoginForm from "@/components/molecules/Forms/LoginForm/LoginForm";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const providers = await getProviders();
  let signInProviders;
  if (session) {
    redirect("/");
  }
  if (providers) {
    signInProviders = Object.values(providers);
  }

  return (
    <>
      <div className="flex flex-shrink">
        <LoginForm providers={signInProviders} />
      </div>
    </>
  );
}
