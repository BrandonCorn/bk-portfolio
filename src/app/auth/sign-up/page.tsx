import SignUpForm from "@/components/molecules/SignUpForm";

const Auth = async () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className=" md:w-1/2 lg:w-3/5 md:flex-col justify-center items-center hidden md:flex bg-indigo-800">
          <div className="hidden md:flex">
            <div className="border border-gray-400 mb-48 shadow-2xl border-transparent overflow-auto text-wrap text-center">
              <h1 className="text-3xl md:text-4xl text-purple-400">
                {" "}
                Welcome to the Portfolio Admin{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center bg-black mx-auto">
          <div className="flex flex-shrink">
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
