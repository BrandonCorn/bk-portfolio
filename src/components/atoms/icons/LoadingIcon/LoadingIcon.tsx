"use client";
import clsx from "clsx";

export type LoadingIconProps = {
  isShowing?: boolean;
  className?: string;
};

const LoadingIcon: React.FC<LoadingIconProps> = ({ isShowing, className }) => {
  const classes = clsx(" ", isShowing && (className || ""), {
    hidden: !isShowing,
  });
  return (
    <div className={classes}>
      <div className="animate-spin rounded-full h-8 w-8 mx-2 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};

export default LoadingIcon;

//inset-0 z-50
