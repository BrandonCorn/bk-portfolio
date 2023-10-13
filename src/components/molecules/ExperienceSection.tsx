import ExperienceRow, {
  ExperienceRowProps,
} from "@/components/atoms/ExperienceRow";

const bcornExperience: ExperienceRowProps[] = [
  {
    title: "Senior Solutions Engineer",
    company: "FlavorCloud",
    startDate: "April 2023",
    endDate: "September 2023",
    description: "Worked in sales",
  },
  {
    title: "Solutions Engineer",
    company: "Twilio",
    startDate: "January 2022",
    endDate: "February 2023",
    description: "Worked in sales",
  },
  {
    title: "Full Stack Engineer",
    company: "Vimbel",
    startDate: "September 2020",
    endDate: "February 2022",
    description: "Killer engineer",
  },
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col ">
        <div className="divide-y-8 divide-white border-solid"></div>
      </div>
      <div className="flex flex-col w-screen">
        {bcornExperience.map((job, index) => {
          return <ExperienceRow {...job} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
