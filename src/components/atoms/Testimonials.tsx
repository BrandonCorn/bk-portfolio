"use client";

import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  company: string;
  jobTitle: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Krista Goralczyk",
    company: "Twilio",
    jobTitle: "Senior Solutions Engineer",
    quote: "The bomb diggity yo",
  },
  {
    name: "Will Helms",
    company: "Yum! Brands",
    jobTitle: "Senior Software Engineer",
    quote: "Greatest programmer in town!",
  },
  {
    name: "Ian Augustine",
    company: "Moveworks Inc.",
    jobTitle: "Senior Account Executive",
    quote: "Close wins deals like nobodies business!",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <div
      key={index}
      className="rounded-lg shadow-xl py-6 pr-6 pl-0 mb-8 mr-8 text-zinc-600 dark:text-zinc-400 "
    >
      <p className="text-white text-xl font-bold mb-2">"{testimonial.quote}"</p>
      <p className="text-lg mb-1"> {testimonial.name} </p>
      <p className="text-sm mb-1">
        {testimonial.jobTitle} at {testimonial.company}
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col"
    >
      <h1 className="text-3xl md:text-4xl font-bold pb-4 md:pb-8">
        Testimonials
      </h1>
      {testimonials.map((testimonial, index) => {
        return (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        );
      })}
    </motion.div>
  );
};

export default Testimonials;
