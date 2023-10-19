import clsx from "clsx";
import { AtomProps } from "../../types";

export type IntroTextProps = {
  text: string;
} & AtomProps<"p">;

const IntroText: React.FC<IntroTextProps> = ({ text, ...rest }) => {
  const classes = clsx(
    "flex items-center justify-center my-6 leading-loose text-lg text-zinc-600 dark:text-zinc-400",
    rest.className
  );

  return (
    <p id={rest.id || ""} className={classes}>
      {text}
    </p>
  );
};

export default IntroText;
