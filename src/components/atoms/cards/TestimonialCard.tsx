"use client";

export type TestimonialProps = {
  quote: string;
  name: string;
  jobTitle: string;
  company: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  jobTitle,
  company,
}) => {
  return (
    <div className="rounded-lg shadow-xl mb-8 mr-8 text-zinc-600 dark:text-zinc-400 p-8 pl-2">
      <p className="text-black dark:text-white text-xl font-bold mb-2">
        &quot;{quote}&quot;
      </p>
      <p className="text-lg mb-1"> {name} </p>
      <p className="text-sm mb-1">
        {jobTitle} at {company}
      </p>
    </div>
  );
};

export default TestimonialCard;
