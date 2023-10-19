"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { redirect } from "next/navigation";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreateError, setUserCreateError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const user = {
      name,
      email,
      password,
    };
    const res = await fetch("http://localhost:3000/api/user/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    setIsLoading(false);
    if (res.ok) {
      resetForm();
      redirect("/admin");
    }
    setUserCreateError(true);
    resetForm();
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
          Sign up for an account
        </h2>
      </div>
      <form className="mt-8 space-y-6">
        <div className="rounded-md md:rounded-lg shadow-lg -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-zinc-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md rounded-t-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-zinc-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-zinc-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="text-md text-blue-500 hover:text-blue-600 ">
            <Link href="/api/auth/signin">Have an account?</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {userCreateError && (
            <div className="text-md text-red-500">
              <p className="text-md text-red-500"> Error creating user</p>
            </div>
          )}
        </div>
      </form>
    </motion.div>
  );
}

export default SignUpForm;
