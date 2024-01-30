import LoginForm from "@/components/molecules/Forms/LoginForm/LoginForm";
import Image from "next/image";
import { useState } from "react";

export default async function Page() {
  return (
    <>
      <div className="flex flex-shrink">
        <LoginForm />{" "}
      </div>
    </>
  );
}
