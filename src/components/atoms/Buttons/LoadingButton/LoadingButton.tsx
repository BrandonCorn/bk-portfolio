"use client";
import clsx from "clsx";
import LoadingIcon from "../../Icons/LoadingIcon/LoadingIcon";

export type LoadingButtonProps = {
  id?: string;
  onClick?: React.FormEventHandler<HTMLButtonElement> | (() => void);
  disabled?: boolean;
  text: string;
  isLoading: boolean;
  loadingText: string;
  type?: "button" | "reset" | "submit";
  className?: string;
  loadingClassName?: string;
};

const LoadingButton: React.FC<LoadingButtonProps> = ({
  id,
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
      id={id || ""}
      disabled={disabled || false}
      type={type || "button"}
      onClick={onClick}
      className={clsx(
        `flex items-center justify-center ${className}`,
        isLoading && `cursor-not-allowed ${loadingClassName || className}`,
        !isLoading && "cursor-pointer"
      )}
    >
      {!isLoading ? text : loadingText}
      {isLoading && (
        <div className="animate-spin rounded-full h-8 w-8 mx-2 border-t-2 border-b-2 border-white"></div>
      )}
    </button>
  );
};

export default LoadingButton;
