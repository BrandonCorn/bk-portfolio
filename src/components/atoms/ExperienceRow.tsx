"use client";
import { motion } from "framer-motion";

export type ExperienceRowProps = {
  company: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
};

const ExperienceRow: React.FC<ExperienceRowProps> = ({
  company,
  startDate,
  endDate,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row my-12 w-full justify-start">
      <div className="flex w-1/2 md:w-1/3 justify-start md:justify-center p-4">
        <p className="text-sm text-zinc-400">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex flex-col group/item hover:bg-zinc-800 rounded-lg p-4 w-full sm:w-1/2 space-y-2">
        <h2 className="text-xl font-bold"> {company} </h2>
        <p className="text-md"> {title} </p>
        <p className="text-sm"> {description} </p>
      </div>
    </div>
  );
};

export default ExperienceRow;
