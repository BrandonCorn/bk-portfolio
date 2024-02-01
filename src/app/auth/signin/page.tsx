"use server";
import LoginForm from "@/components/molecules/Forms/LoginForm/LoginForm";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import { useServerSession } from "@/hooks/session/useServerSession";

export default async function Page() {
  const session = await useServerSession();
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
