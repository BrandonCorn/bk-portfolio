"use client";

import ImageGallery from "@/components/molecules/Gallery/ImageGallery/ImageGallery";
import WithMarcus from "/public/about-me/brandon-marcus.jpeg";
import MeowWolf from "/public/about-me/meow-wolf-1.jpeg";
import MeowWolf2 from "/public/about-me/meow-wolf-2.jpeg";
import TwilioSpeaker from "/public/about-me/twilio-speaker.jpeg";
import Mom from "/public/about-me/brandon-mom.jpeg";
import TestimonialsSection from "@/components/organisms/Sections/TestimonialsSection/TestimonialsSection";
import HomeIntro from "@/components/molecules/Cards/HomeIntroCard/HomeIntro";
import ContactSection from "@/components/organisms/Sections/ContactSection/ContactSection";
import { LayoutGroup } from "framer-motion";

const homeImages = [MeowWolf, WithMarcus, MeowWolf2, TwilioSpeaker, Mom];

function Home() {
  return (
    <LayoutGroup>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
          <div className="flex flex-col w-full">
            <HomeIntro />

            <div className="p-4 md:p-8">
              <ImageGallery images={homeImages} />
            </div>

            <div className="flex flex-col lg:flex-row my-16 space-x-10">
              <div className="bg-transparent p-4 flex-1 flex-col sm:flex">
                <ContactSection />
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

export default Home;
