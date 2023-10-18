"use client";
import SkillsRow, { IconProps } from "@/components/atoms/SkillRow";
import { motion } from "framer-motion";

const iconList: IconProps[] = [
  {
    src: "/tech-icons/Node.js.svg",
    label: "Node.js",
    href: "https://nodejs.org/en",
  },
  {
    src: "/tech-icons/AWS.svg",
    label: "AWS",
    href: "https://aws.amazon.com/solutions/?nc2=h_ql_sol",
  },
  {
    src: "/tech-icons/Next.js.svg",
    label: "Next.js",
    href: "https://nextjs.org/",
  },

  {
    src: "/tech-icons/React.svg",
    label: "React",
    href: "https://react.dev/",
  },
  {
    src: "/tech-icons/MySQL.svg",
    label: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    src: "/tech-icons/Python.svg",
    label: "Python",
    href: "https://www.python.org/",
  },
  {
    src: "/tech-icons/Git.svg",
    label: "Git",
    href: "https://git-scm.com/about",
  },
  {
    src: "/tech-icons/Docker.svg",
    label: "Docker",
    href: "https://www.docker.com/",
  },
  {
    src: "/tech-icons/TypeScript.svg",
    label: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    src: "/tech-icons/Redux.svg",
    label: "Redux",
    href: "https://redux.js.org/",
  },
  {
    src: "/tech-icons/Redis.svg",
    label: "Redis",
    href: "https://redis.io/",
  },
  {
    src: "/tech-icons/MongoDB.svg",
    label: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    src: "/tech-icons/Java.svg",
    label: "Java",
    href: "https://www.java.com/en/",
  },
];

const SkillsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className=" flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold my-4 mb-8">Skills</h1>
      <div className="flex justify-center items-center w-full sm:w-screen  border-2 rounded-xl bg-gray-800 dark:bg-gray-200">
        <SkillsRow images={iconList} />
      </div>
    </motion.div>
  );
};

export default SkillsSection;
