import { FormEventHandler } from "react";
import { AtomProps } from "../../types";
import clsx from "clsx";

export type GeneralButtonProps = {
  text: string;
} & AtomProps<"button">;

const GeneralButton: React.FC<GeneralButtonProps> = ({ text, ...rest }) => {
  const classes = clsx(
    "flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",
    rest.className
  );
  return (
    <button
      id={rest.id || ""}
      className={classes}
      type={rest.type || "submit"}
      onSubmit={rest.onSubmit}
      disabled={rest.disabled || false}
      {...rest}
    >
      {text}
    </button>
  );
};

export default GeneralButton;
