import React from "react";

export type GeneralInputProps = {
  placeholder: string;
  value: string;
  type?: string;
  ariaLabel?: string;
  required?: boolean;
  onChange: (value: string) => void;
  className?: string;
};

export const GeneralInput: React.FC<GeneralInputProps> = ({
  placeholder,
  value,
  type,
  ariaLabel,
  required,
  onChange,
  className,
}) => {
  console.log("renders every time", value);
  return (
    <input
      aria-label={ariaLabel || "text"}
      className={
        className ||
        "appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outilne-none"
      }
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required || false}
    ></input>
  );
};

export default React.memo(GeneralInput);
