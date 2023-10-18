import clsx from "clsx";

type DescriptionProps = {
  id?: string;
  text: string;
  className?: string;
};

const DescriptionText: React.FC<DescriptionProps> = ({
  id,
  text,
  className,
}) => {
  const classes = clsx(
    "text-sm text-black dark:text-zinc-100 flex items-center",
    className
  );
  return (
    <p id={id || ""} className={classes}>
      {text}
    </p>
  );
};

export default DescriptionText;
