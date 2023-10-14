type DescriptionProps = {
  text: string;
};

const DescriptionText: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <div>
      <p className="text-sm text-black dark:text-zinc-100 flex items-center">
        {text}
      </p>
    </div>
  );
};

export default DescriptionText;
