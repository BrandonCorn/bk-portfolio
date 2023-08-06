"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "@/components/Image-Gallery";
import Disneyland from "../../public/about-me/brandon-kat-disneyland-2.jpg";
import MeowWolf from "../../public/about-me/meow-wolf-1.jpeg";
import MeowWolf2 from "../../public/about-me/meow-wolf-2.jpeg";
import Skate from "../../public/about-me/skateboarding-1.jpeg";
import TwilioSpeaker from "../../public/about-me/twilio-speaker.jpeg";
import Mom from "../../public/about-me/brandon-mom.jpeg";
import PersonalLogo from "../../public/personal-logo.jpeg";

const homeImages = [MeowWolf, Disneyland, MeowWolf2, TwilioSpeaker, Mom];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-11">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col w-full"
        >
          <div className="flex justify-center lg:max-w-screen-sm md:px-16">
            <div className="lg:p-4 flex-1">
              <div className="mx-auto w-full max-w-7xl tracking-tighter font-sans">
                <div className="mb-8">
                  <Image
                    src={PersonalLogo}
                    alt="Personal Logo"
                    width={100}
                    className="object-fill rounded-full"
                  />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-normal">
                  Engineer, mentor, and imagineer
                </h1>
                <p className="my-6 leading-loose text-lg text-zinc-600 dark:text-zinc-400">
                  I’m Brandon, a software designer and entrepreneur based in New
                  York City. I’m the founder and CEO of Planetaria, where we
                  develop technologies that empower regular people to explore
                  space on their own terms.
                </p>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="p-4">
            <ImageGallery images={homeImages} />
          </div>

          {/* Third row */}
          <div className="flex flex-col lg:flex-row">
            <div className="bg-yellow-500 p-4 flex-1 sm:flex">
              {/* Content of the third row, first column */}
            </div>
            <div className="bg-purple-500 p-4 flex-1 sm:flex ">
              {/* Content of the third row, second column */}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

//separate into 3 rows of different sizes
//two columns in the last row
//middle row can be smallest in height
//always start content at the same spot/margin from the nav bar

//1st row, title with image above it, explaination of who I am

//2nd row, cool images from teams I've worked with or things I've done

//3rd row, 2 columns
