"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PersonalLogo from "../../../public/personal-logo.jpeg";

const HomeIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center lg:max-w-screen-sm px-2 sm:px-4"
    >
      <div className="mx-auto w-full max-w-7xl tracking-tighter font-sans">
        <div className="mb-8">
          <Image
            src={PersonalLogo}
            alt="Personal Logo"
            width={80}
            className="object-fill rounded-full"
          />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold leading-normal">
          Engineer, mentor, and imagineer
        </h1>
        <p className="my-6 leading-loose text-lg text-zinc-600 dark:text-zinc-400">
          I’m Brandon, a software engineer and entrepreneur based in Colorado
          Springs. I'm a lover of learning and imagining, whether that's at
          Disneyworld, DragonCon, or on the job! I have great pride my
          contributions, and am always excited for more! Let's work together!
        </p>
      </div>
    </motion.div>
  );
};

export default HomeIntro;
