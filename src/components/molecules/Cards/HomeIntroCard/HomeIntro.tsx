"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PersonalLogo from "../../../public/personal-logo.jpeg";
import IntroText from "@/components/atoms/Texts/IntroText/IntroText";
import IntroTitle from "../../../atoms/Titles/IntroTitle/IntroTitle";

const introText = `I'm Brandon, a software engineer and entrepreneur based in Columbus, Georiga. I'm a lover of learning and imagining, whether that's at DragonCon, my projects, or DisneyWorld! I have great pride in my contributions, and am always excited to learn. Let's work together!`;
const introTitle = "Engineer, mentor, and imagineer";

const HomeIntroCard = () => {
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
            priority
            src={"/personal-logo.jpeg"}
            alt="Personal Logo"
            width={80}
            height={80}
            className="object-fill rounded-full"
            style={{ height: "auto", width: "auto" }}
          />
        </div>
        <IntroTitle text={introTitle} />

        <IntroText text={introText} />
      </div>
    </motion.div>
  );
};

export default HomeIntroCard;
