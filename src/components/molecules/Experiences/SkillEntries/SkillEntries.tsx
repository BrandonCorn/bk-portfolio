"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export type IconProps = {
  src: string;
  label: string;
  href: string;
};

type SkillEntriesProps = {
  images: IconProps[];
};

const SkillEntries: React.FC<SkillEntriesProps> = ({ images }) => {
  return (
    <div className="flex my-16">
      <div className="flex flex-wrap justify-center items-center">
        {images.map((img: IconProps, index: number) => (
          <motion.div
            whileHover={{
              scale: 1.4,
              transition: {
                duration: 0.2,
              },
            }}
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col w-1/2 h-32 sm:w-1/3 sm:h-32 md:h-40 md:w-1/3 lg:w-1/4 justify-center items-center text-center"
            key={index}
          >
            <a href={img.href}>
              <Image src={img.src} alt={img.label} width={70} height={40} />
              <p className="text-gray-700 dark:text-cyan-600"> {img.label} </p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillEntries;
