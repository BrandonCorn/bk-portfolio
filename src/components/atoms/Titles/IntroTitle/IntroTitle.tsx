import React from "react";
import { AtomProps } from "../../types";
import clsx from "clsx";

export type IntroTitleProps = {
  text: string;
} & AtomProps<"p">;

const IntroTitle: React.FC<IntroTitleProps> = ({ text, ...rest }) => {
  const classStyles = clsx(
    "text-4xl lg:text-5xl font-bold leading-normal",
    rest.className
  );
  return (
    <p id={rest.id || ""} className={classStyles} {...rest}>
      {text}
    </p>
  );
};

export default IntroTitle;
