import LoginForm from "@/components/molecules/Forms/LoginForm/LoginForm";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import { serverSession } from "@/app/api/auth/[...nextauth]/options";

export default async function Page() {
  const session = await serverSession();
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
