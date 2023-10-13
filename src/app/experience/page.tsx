import Image from "next/image";
import Link from "next/link";
import SkillsTemplate from "@/components/organisms/SkillsTemplate";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-center">
        <SkillsTemplate />
      </div>
      {/* <div className="flex flex-row items-center justify-center h-1/3">
        <div>Not a whole lot</div>
      </div>
      <div className="flex flex-row items-center justify-center h-1/3">
        <div>What's up fool</div>
        <p> </p>
      </div> */}
    </div>
  );
};

export default Experience;
