import clsx from "clsx";
import { AtomProps } from "../../types";

export type BasicTitle = {
  text: string;
} & AtomProps<"h1">;

const BasicTitle: React.FC<BasicTitle> = ({ text, ...rest }) => {
  const classes = clsx(
    "flex text-lg text-black dark:text-white",
    rest.className
  );
  return (
    <h1 className={classes} {...rest}>
      {text}
    </h1>
  );
};

export default BasicTitle;
