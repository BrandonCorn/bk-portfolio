import { FormEventHandler } from "react";
import { AtomProps } from "../../types";
import clsx from "clsx";

export type BasicButtonProps = {
  text?: string;
} & AtomProps<"button">;

const BasicButton: React.FC<BasicButtonProps> = ({
  text,
  children,
  ...rest
}) => {
  const classes = clsx(
    "bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",
    rest.className
  );
  return (
    <button className={classes} type={rest.type || "button"} {...rest}>
      {text || children}
    </button>
  );
};

export default BasicButton;
