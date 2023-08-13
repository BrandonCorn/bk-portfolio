"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { SendVerificationBody } from "@/app/api/send-verification/route";

const LoginForm = () => {
  const sendVerification = async () => {
    const body: SendVerificationBody = {
      phoneNumber: "+17067612848",
    };
    console.log("entered send verification");
    const verify = await fetch("http://localhost:3000/api/send-verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    // console.log("sent verification what in the world", verify.json());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="max-w-md w-full space-y-8 bg-black rounded-lg border border-gray-600 p-24"
    >
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign in to your account
        </h2>
      </div>
      <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm -space-y-px">
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
              className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
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
              className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <Link href="/two-factor">
            <button
              onClick={sendVerification}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginForm;
