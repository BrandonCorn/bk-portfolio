import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

//

const ImageGallery = ({ images }: { images: StaticImageData[] }) => {
  const evenOdd = (index: number) => (index % 2 === 0 ? 0 : 1);

  return (
    <div className="flex flex-row items-center justify-center overflow-visible">
      <div className="flex flex-row">
        {images.map((image, index) => (
          <div className="w-56 h-56 md:w-72 md:h-72 mx-4 ">
            <Image
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
    </div>
  );
};

export default ImageGallery;
