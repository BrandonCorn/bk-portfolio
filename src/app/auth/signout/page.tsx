import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Page() {
  await signOut();
  redirect("/auth/signin");
}
