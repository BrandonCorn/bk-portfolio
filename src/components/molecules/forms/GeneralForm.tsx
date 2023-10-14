type CustomFormProps = {
  Description: React.ReactNode;
  FormInput: React.ReactNode;
  FormButton: React.ReactNode;
};

type FormActionProps = {
  onSubmit?: () => void;
};

const GeneralForm: React.FC<CustomFormProps & FormActionProps> = ({
  FormInput,
  FormButton,
  Description,
  onSubmit,
}) => {
  return (
    <div className=" max-w-sm lg:max-w-full lg:flex">
      <div className="flex flex-col justify-center w-full">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">{Description}</div>
        </div>
        <div className="flex items-center border-b border-teal-500 py-2">
          {FormInput}
          {FormButton}
        </div>
      </div>
    </div>
  );
};

export default GeneralForm;
