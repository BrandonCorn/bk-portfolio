import clsx from "clsx";
import { AtomProps } from "../../types";

type DescriptionProps = {
  text: string;
} & AtomProps<"p">;

const DescriptionText: React.FC<DescriptionProps> = ({ text, ...rest }) => {
  const classes = clsx(
    "text-sm text-black dark:text-zinc-100 flex items-center",
    rest.className
  );
  return (
    <p id={rest.id || ""} className={classes}>
      {text}
    </p>
  );
};

export default DescriptionText;
