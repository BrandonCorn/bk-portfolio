import React from "react";
import { AtomProps } from "../types";
import clsx from "clsx";

export type GeneralInputProps = {} & AtomProps<"input">;

export const GeneralInput: React.FC<GeneralInputProps> = ({
  onChange,
  ...rest
}) => {
  const classes = clsx(
    "appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outilne-none",
    rest.className
  );
  return <input className={classes} onChange={onChange} {...rest}></input>;
};

export default React.memo(GeneralInput);
