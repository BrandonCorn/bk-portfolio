import { FormEventHandler } from "react";

export type GeneralButtonProps = {
  onSubmit: FormEventHandler<HTMLButtonElement>;
  text: string;
  style?: string;
};

const GeneralButton: React.FC<GeneralButtonProps> = ({
  onSubmit,
  text,
  style,
}) => {
  return (
    <button
      className={
        style ||
        "flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      }
      type="button"
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
};

export default GeneralButton;
