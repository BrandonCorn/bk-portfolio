import React from "react";
import { AtomProps } from "../types";
import clsx from "clsx";

// export type GeneralInputProps = {
//   id?: string;
//   placeholder: string;
//   value: string;
//   type?: string;
//   ariaLabel?: string;
//   required?: boolean;
//   onChange: (value: string) => void;
//   className?: string;
// };
export type GeneralInputProps = {} & AtomProps<"input">;

export const GeneralInput: React.FC<GeneralInputProps> = ({
  onChange,
  ...rest
}) => {
  const classes = clsx(
    "appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outilne-none",
    rest.className
  );
  return (
    <input
      className={
        "appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outilne-none"
      }
      onChange={onChange}
      {...rest}
    ></input>
  );
};

export default React.memo(GeneralInput);
