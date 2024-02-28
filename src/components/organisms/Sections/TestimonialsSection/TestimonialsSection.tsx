"use client";

import { motion } from "framer-motion";

import TestimonialCard, {
  TestimonialProps,
} from "@/components/molecules/Cards/TestimonialCard/TestimonialCard";

const testimonials: TestimonialProps[] = [
  {
    name: "Will Helms",
    company: "Yum Brands!",
    jobTitle: "Staff Software Engineer",
    quote:
      "Super talented Software Engineer. Whoever picks him up will be lucky to have him on their team.",
  },
  {
    name: "Zach Sakowski",
    company: "HubSpot",
    jobTitle: "Growth Specialist",
    quote:
      "You were one of the best SEs I have ever worked with. It was truly an honor to tag team sales calls and learn the technical side of Twilio from you",
  },
  {
    name: "Krista Goralcyzk",
    company: "Vercel",
    jobTitle: "Solutions Engineer",
    quote:
      "I greatly enjoyed working with Brandon at Twilio. He is a very sharp Solutions Engineer and strong programmer. Between his motivation to tinker with code and great communication skills, I highly recommend working with him!",
  },
];

const TestimonialsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col mt-8 sm:mt0"
    >
      <h1 className="text-3xl md:text-4xl font-bold pb-4 md:pb-8">
        Testimonials
      </h1>
      {testimonials.map((testimonial, index) => {
        return <TestimonialCard key={index} {...testimonial} />;
      })}
    </motion.div>
  );
};

export default TestimonialsSection;
