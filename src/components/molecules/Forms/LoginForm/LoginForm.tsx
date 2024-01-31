"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result && result.ok) {
      router.push("/");
    } else {
      alert("your email password combination has failed");
      resetForm();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className=" max-w-sm space-y-8 bg-white shadow-lg rounded-lg border p-24"
    >
      <div>
        <h2 className="mt-3 text-center text-3xl font-bold text-grey-800">
          Sign in to your account
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md md:rounded-lg shadow-lg -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-zinc-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-zinc-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-md text-blue-500 hover:text-blue-600">
            <Link href="/auth/signup"> Sign Up </Link>
          </div>
          <div className="text-md text-blue-500 hover:text-blue-600">
            <Link href="/auth/signup"> Forgot Password </Link>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginForm;
