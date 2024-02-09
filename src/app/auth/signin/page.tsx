// import LoginForm from "@/components/molecules/Forms/LoginForm/LoginForm";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import { serverSession } from "@/app/api/auth/[...nextauth]/options";
import dynamic from "next/dynamic";

const DynamicLoginForm = dynamic(
  () => import("../../../components/molecules/Forms/LoginForm/LoginForm"),
  {
    loading: () => <p>Loading...</p>,
  }
);

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
        {/* <LoginForm providers={signInProviders} /> */}
        <DynamicLoginForm providers={signInProviders} />
      </div>
    </>
  );
}
