"use server";
import LoginForm from "@/components/molecules/Forms/LoginForm/LoginForm";

export default async function Page() {
  return (
    <>
      <div className="flex flex-shrink">
        <LoginForm />
      </div>
    </>
  );
}
