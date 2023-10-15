"use client";

import ImageGallery from "@/components/molecules/ImageGallery";
import Disneyland from "/public/about-me/brandon-kat-disneyland-2.jpg";
import MeowWolf from "/public/about-me/meow-wolf-1.jpeg";
import MeowWolf2 from "/public/about-me/meow-wolf-2.jpeg";
import TwilioSpeaker from "/public/about-me/twilio-speaker.jpeg";
import Mom from "/public/about-me/brandon-mom.jpeg";
import TestimonialsSection from "@/components/atoms/TestimonialsSection";
import HomeIntro from "@/components/atoms/HomeIntro";
import { Header } from "@/components";
import SmsContactForm from "@/components/organisms/SmsContactForm";
import { LayoutGroup } from "framer-motion";

import BasicModal from "@/components/atoms/modal/BasicModal";
import { useState } from "react";

const homeImages = [MeowWolf, Disneyland, MeowWolf2, TwilioSpeaker, Mom];

export default function Home() {
  return (
    <LayoutGroup>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
          <div className="flex flex-col w-full">
            <HomeIntro />

            <div className="p-4 md:p-8">
              <ImageGallery images={homeImages} />
            </div>

            <div className="flex flex-col lg:flex-row my-16 space-x-10 ">
              <div className="bg-transparent p-4 flex-1 flex-col sm:flex">
                <SmsContactForm />
              </div>
              <div className="flex flex-1 sm:flex my-4">
                <TestimonialsSection />
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutGroup>
  );
}
