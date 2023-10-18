"use client";
import clsx from "clsx";
import LoadingIcon from "../../icons/LoadingIcon/LoadingIcon";

export type LoadingButton = {
  onClick?: React.FormEventHandler<HTMLButtonElement> | (() => void);
  disabled?: boolean;
  text: string;
  isLoading: boolean;
  loadingText: string;
  type?: "button" | "reset" | "submit";
  className?: string;
  loadingClassName?: string;
};

const LoadingButton: React.FC<LoadingButton> = ({
  onClick,
  disabled,
  text,
  isLoading,
  loadingText,
  type,
  className,
  loadingClassName,
}) => {
  return (
    <button
      disabled={isLoading || false}
      type={type || "button"}
      onClick={onClick}
      className={clsx(
        `flex items-center justify-center ${className}`,
        isLoading && `cursor-not-allowed ${loadingClassName || className}`,
        !isLoading && "cursor-pointer"
      )}
    >
      {!isLoading ? text : loadingText}
      <LoadingIcon isShowing={isLoading} />
    </button>
  );
};

export default LoadingButton;
