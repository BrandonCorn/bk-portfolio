"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

const ImageGallery = ({ images }: { images: StaticImageData[] }) => {
  const evenOdd = (index: number) => (index % 2 === 0 ? 0 : 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="flex flex-row justify-center overflow-visible"
    >
      <div className="flex flex-row">
        {images.map((image, index) => (
          <div className="w-56 h-56 md:w-72 md:h-72 mx-4 " key={index}>
            <Image
              priority={index === 1 ? true : false}
              key={index}
              className={clsx(
                "w-full h-full object-cover tilt-left border rounded-xl border-transparent shadow mx-4",
                evenOdd(index) === 1 ? "tilt-right" : "tilt-left"
              )}
              src={image}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
              quality={100}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageGallery;
