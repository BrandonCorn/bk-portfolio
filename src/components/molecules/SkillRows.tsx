"use client";
import SkillsRow, { IconProps } from "@/components/atoms/SkillRow";
import { motion } from "framer-motion";

const iconList: IconProps[] = [
  {
    src: "/tech-icons/Node.js.svg",
    label: "Node.js",
  },
  {
    src: "/tech-icons/AWS.svg",
    label: "AWS",
  },
  {
    src: "/tech-icons/Next.js.svg",
    label: "Next.js",
  },

  {
    src: "/tech-icons/React.svg",
    label: "React",
  },
  {
    src: "/tech-icons/MySQL.svg",
    label: "MySQL",
  },
  {
    src: "/tech-icons/Python.svg",
    label: "Pytho",
  },
  {
    src: "/tech-icons/Git.svg",
    label: "Git",
  },
  {
    src: "/tech-icons/Docker.svg",
    label: "Docker",
  },
  {
    src: "/tech-icons/Typescript.svg",
    label: "Typescript",
  },
  {
    src: "/tech-icons/Redux.svg",
    label: "Redux",
  },
  {
    src: "/tech-icons/Redis.svg",
    label: "Redis",
  },
  {
    src: "/tech-icons/MongoDB.svg",
    label: "MongoDB",
  },
  {
    src: "/tech-icons/Java.svg",
    label: "Java",
  },
];

const SkillRows = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold my-4 mb-8">
        Skills & Experience
      </h1>
      <div className="w-full sm:w-3/4 border-rose-200 border-2 rounded-xl bg-gray-800 dark:bg-gray-200">
        <SkillsRow images={iconList} />
      </div>
    </motion.div>
  );
};

export default SkillRows;
