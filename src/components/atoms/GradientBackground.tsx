"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const GradientBackground = () => {
  return (
    <div className="flex">
      <Image
        src={"/login/login-2.jpg"}
        alt="computer skills"
        width={2400}
        height={80}
        className="w-auto h-auto my-12"
      />
    </div>
  );
};

export default GradientBackground;
