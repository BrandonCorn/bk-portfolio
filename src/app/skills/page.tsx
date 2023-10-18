import ExperienceSection from "@/components/organisms/sections/ExperienceSection/ExperienceSection";
import SkillsSection from "@/components/organisms/sections/SkillSection/SkillSection";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-center">
        <SkillsSection />
      </div>
      <div className="flex flex-row">
        <ExperienceSection />
      </div>
    </div>
  );
};

export default Experience;
