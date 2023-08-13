import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import Disneyland from "../../public/about-me/brandon-kat-disneyland-2.jpg";
import MeowWolf from "../../public/about-me/meow-wolf-1.jpeg";
import MeowWolf2 from "../../public/about-me/meow-wolf-2.jpeg";
import TwilioSpeaker from "../../public/about-me/twilio-speaker.jpeg";
import Mom from "../../public/about-me/brandon-mom.jpeg";
import Testimonials from "@/components/Testimonials";
import MovieGallery from "@/components/MovieGallery";
import HomeIntro from "@/components/HomeIntro";

const homeImages = [MeowWolf, Disneyland, MeowWolf2, TwilioSpeaker, Mom];

const testMovies = [
  {
    title: "alsdjf",
    releaseDate: "alsdjf",
    image: MeowWolf,
  },
  {
    title: "alsdjf",
    releaseDate: "alsdjf",
    image: MeowWolf,
  },
  {
    title: "alsdjf",
    releaseDate: "alsdjf",
    image: MeowWolf,
  },
  {
    title: "alsdjf",
    releaseDate: "alsdjf",
    image: MeowWolf,
  },
  {
    title: "alsdjf",
    releaseDate: "alsdjf",
    image: MeowWolf,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col w-full">
          {/* first row */}
          <HomeIntro />

          {/* Second row */}
          <div className="p-4 md:p-8">
            <ImageGallery images={homeImages} />
          </div>

          {/* Third row */}
          <div className="flex flex-col lg:flex-row py-16">
            <div className="bg-transparent p-4 flex-1 flex-col sm:flex">
              {/* Content of the third row, first column */}
              <Testimonials />
            </div>
            <div className="p-4 flex-1 sm:flex ">
              {/* Content of the third row, second column */}
              {/* <MovieGallery movies={testMovies} /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
