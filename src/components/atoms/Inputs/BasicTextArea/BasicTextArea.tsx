import React, { ChangeEvent } from "react";
import { AtomProps } from "../../types";
import clsx from "clsx";

export type BasicTextAreaProps = {
  text?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
} & AtomProps<"textarea">;

export const BasicTextArea: React.FC<BasicTextAreaProps> = ({
  text,
  children,
  onChange,
  ...rest
}) => {
  const classes = clsx("", rest.className);
  return (
    <textarea className={classes} onChange={onChange} {...rest}>
      {children}
    </textarea>
  );
};

export default BasicTextArea;
