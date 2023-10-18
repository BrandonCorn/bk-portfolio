import clsx from "clsx";

export type IntroTextProps = {
  text: string;
  className?: string;
};

const IntroText: React.FC<IntroTextProps> = ({ text, className }) => {
  const classes = clsx(
    "flex items-center justify-center my-6 leading-loose text-lg text-zinc-600 dark:text-zinc-400",
    className
  );

  return <p className={classes}>{text}</p>;
};

export default IntroText;
