import Image from "next/image";
import Link from "next/link";
import SkillsTemplate from "@/components/organisms/SkillsTemplate";
import GradientBackground from "@/components/atoms/GradientBackground";
import ExperienceTemplate from "@/components/organisms/ExperienceTemplate";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-center">
        <SkillsTemplate />
      </div>
      {/* <div className="flex flex-row items-center justify-center">
        <GradientBackground />
      </div> */}
      <div className="flex flex-row">
        <ExperienceTemplate />
      </div>
    </div>
  );
};

export default Experience;
