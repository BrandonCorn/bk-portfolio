import ExperienceRow, {
  ExperienceRowProps,
} from "@/components/atoms/ExperienceRow";

const roles = {
  FlavorCloud:
    "In my role as a Senior Solutions Engineer at FlavorCloud, I collaborated closely with our 3PL partners and SMB merchants to understand their unique needs and business objectives. I designed customized end-to-end solutions for rating and fulfillment, leveraging FlavorCloud's platform APIs. I also acted as a trusted advisor, guiding our partners on how FlavorCloud's solutions drive success in logistics and support international expansion. Notably, I developed a new documentation site for our team, employing Next.js and React. To showcase the potential, I deployed a compelling demonstration on AWS through Elastic Beanstalk and Code Commit, effectively highlighting my expertise and contributions to FlavorCloud's growth and success.",
  Twilio:
    "At Twilio, my role as a results-driven Senior Solutions Engineer has been marked by consistently exceeding sales quotas, achieving 100% or more every quarter. My unwavering focus on high-margin software opportunities, in collaboration with five Account Executives, has enabled a deep understanding of customer challenges, driving exceptional value for both Twilio and clients. I've expertly showcased the potential of custom solutions by constructing and presenting proof of concept solutions with technologies like JavaScript, Lambda, and Twilio APIs, demonstrating innovative features such as private/public video rooms and mobile sales agent calling applications. I've also been instrumental in reducing SMS fraud and enhancing deliverability while fostering long-term customer relationships through efficient communication and troubleshooting. My extensive engineering background has been instrumental in consistently delivering outstanding results and driving technical innovation.",
  Vimbel:
    "During my time at Vimbel, I led the development of the company's full-stack mobile application, utilizing React Native, Node.js, Typescript, mySQL, and MongoDB to exceed technical and design standards set by the product team. I collaborated on implementing a streamlined CI/CD pipeline and cloud infrastructure using GitLab and AWS, significantly reducing deployment time and enhancing product reliability. My commitment to excellence extended to code reviews, where I optimized performance and ensured application stability. I also played a key role in selecting and integrating external technologies, boosting development efficiency. My Vimbel experience has equipped me with the skills and expertise to drive success in my future endeavors.",
};

const bcornExperience: ExperienceRowProps[] = [
  {
    title: "Senior Solutions Engineer",
    company: "FlavorCloud",
    startDate: "April 2023",
    endDate: "September 2023",
    description: roles.FlavorCloud,
  },
  {
    title: "Solutions Engineer",
    company: "Twilio",
    startDate: "January 2022",
    endDate: "February 2023",
    description: roles.Twilio,
  },
  {
    title: "Full Stack Engineer",
    company: "Vimbel",
    startDate: "September 2020",
    endDate: "February 2022",
    description: roles.Vimbel,
  },
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-row">
      {/* <div className="flex flex-col ">
        <div className="divide-y-8 divide-white border-solid"></div>
      </div> */}
      <div className="flex flex-col w-screen">
        {bcornExperience.map((job, index) => {
          return <ExperienceRow {...job} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
