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

type ExperienceRowProps = {
  images: IconProps[];
};

const ExperienceRow: React.FC<ExperienceRowProps> = ({ images }) => {
  return (
    <div className="my-12">
      <div className="flex flex-wrap justify-center items-center">
        {images.map((img: IconProps, index: number) => (
          <div
            className="flex flex-col w-1/2 h-32 sm:w-1/3 sm:h-32 md:h-40 md:w-1/3 lg:w-1/4 justify-center items-center"
            key={index}
          >
            <Image src={img.src} alt={img.label} width={40} height={40} />
            <p className="text-white dark:text-cyan-600 mt-4"> {img.label} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceRow;
