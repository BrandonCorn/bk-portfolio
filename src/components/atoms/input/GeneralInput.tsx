import { ChangeEventHandler } from "react";

export type GeneralInputProps = {
  placeholder: string;
  value: string;
  type?: string;
  ariaLabel?: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  style?: string;
};

export const GeneralInput: React.FC<GeneralInputProps> = ({
  placeholder,
  value,
  type,
  ariaLabel,
  required,
  onChange,
  style,
}) => {
  return (
    <input
      aria-label={ariaLabel || "text"}
      className={
        style ||
        "appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outilne-none"
      }
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required || false}
    ></input>
  );
};

export default GeneralInput;
