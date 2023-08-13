"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { CheckVerificationBody } from "@/app/api/check-verification/route";

const TwoFactorForm = () => {
  const [success, setSuccess] = useState("message");
  const [otp, setOTP] = useState("");

  const otpHandler = (e: any) => setOTP(e.currentTarget.value);

  const submitOTP: React.FormEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const body: CheckVerificationBody = {
      phoneNumber: "+17067612848",
      code: otp,
    };

    const res = await fetch("http://localhost:3000/api/check-verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log("got some data", data);
    // return data;
    if (data.tokenStatus === "approved") setSuccess("Great, you got it right!");
    else setSuccess("Invalid code provided");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center -mt-32 py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* <h1 className="text-4xl md:text-5xl font-bold mb-32"> Welcome Back </h1> */}
      <div className="max-w-md w-full space-y-8 bg-black rounded-lg border border-gray-600 p-24">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Enter the Two-Factor Authentication Code
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="code" className="sr-only">
                Two-Factor Authentication Code
              </label>
              <input
                id="code"
                name="code"
                type="text"
                autoComplete="off"
                required
                className="appearance-none rounded-md  relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter code here"
                value={otp}
                onChange={otpHandler}
              />
            </div>
          </div>

          <div>
            <button
              onClick={submitOTP}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify Code
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 ">
        <p
          className={clsx(
            "flex text-5xl text-white",
            success === "message" ? "hidden" : "visible"
          )}
        >
          {success}
        </p>
      </div>
    </motion.div>
  );
};

export default TwoFactorForm;
