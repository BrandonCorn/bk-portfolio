import LoginForm from "@/components/LoginForm";
import Image from "next/image";
const Login = async () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-1/2 md:flex-col justify-center items-center hidden md:flex bg-blue-200">
          <div className="hidden md:flex">
            <div className="border border-gray-400 rounded-xl shadow-lg border-transparent overflow-auto">
              <Image
                src={"/login/login-3.jpg"}
                alt={"Login Image"}
                layout="responsive"
                quality={80}
                width={500}
                height={400}
                className="w-full h-full object-cover mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white">
          <div className="flex ">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
