"use server";
import LoginForm from "@/components/molecules/Forms/LoginForm/LoginForm";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("session ", session);
  if (session) {
    redirect("/");
  }

  return (
    <>
      <div className="flex flex-shrink">
        <LoginForm />
      </div>
    </>
  );
}
