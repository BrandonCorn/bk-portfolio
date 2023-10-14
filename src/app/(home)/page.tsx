"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/molecules/ImageGallery";
import Disneyland from "/public/about-me/brandon-kat-disneyland-2.jpg";
import MeowWolf from "/public/about-me/meow-wolf-1.jpeg";
import MeowWolf2 from "/public/about-me/meow-wolf-2.jpeg";
import TwilioSpeaker from "/public/about-me/twilio-speaker.jpeg";
import Mom from "/public/about-me/brandon-mom.jpeg";
import Testimonials from "@/components/atoms/Testimonials";
import HomeIntro from "@/components/atoms/HomeIntro";
import { useSession } from "next-auth/react";
import { Header } from "@/components";
import SmsContactForm from "@/components/organisms/SmsContactForm";

const homeImages = [MeowWolf, Disneyland, MeowWolf2, TwilioSpeaker, Mom];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col w-full">
          <HomeIntro />

          <div className="p-4 md:p-8">
            <ImageGallery images={homeImages} />
          </div>

          <div className="flex flex-col lg:flex-row py-16">
            <div className="bg-transparent p-4 flex-1 flex-col sm:flex">
              <SmsContactForm />
            </div>
            <div className="p-4 flex-1 sm:flex "></div>
          </div>
        </div>
      </div>
    </main>
  );
}
