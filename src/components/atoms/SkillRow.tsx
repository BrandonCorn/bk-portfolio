"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export type IconProps = {
  src: string;
  label: string;
};

type SkillsRowProps = {
  images: IconProps[];
};

const SkillsRow: React.FC<SkillsRowProps> = ({ images }) => {
  return (
    <div className="my-12">
      <div className="flex flex-wrap justify-center items-center">
        {images.map((img: IconProps, index: number) => (
          <motion.div
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col w-1/2 h-32 sm:w-1/3 sm:h-32 md:h-40 md:w-1/3 lg:w-1/4 justify-center items-center"
            key={index}
          >
            <Image src={img.src} alt={img.label} width={40} height={40} />
            <p className="text-white dark:text-cyan-600 mt-4"> {img.label} </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsRow;
