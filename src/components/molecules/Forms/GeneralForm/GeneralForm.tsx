"use client";

import GeneralInput, {
  GeneralInputProps,
} from "@/components/atoms/Inputs/GeneralInput";
import React, { FormEventHandler } from "react";

type CustomFormProps = {
  children: React.ReactNode;
  Description: React.ReactNode;
  formInputFields?: GeneralInputProps[];
  FormButton: React.ReactNode;
  onSubmit: FormEventHandler<HTMLButtonElement | HTMLFormElement>;
};

const GeneralForm: React.FC<CustomFormProps> = ({
  formInputFields,
  FormButton,
  Description,
  onSubmit,
  children,
}) => {
  return (
    <div className=" max-w-sm lg:max-w-full lg:flex">
      <div className="flex flex-col justify-center w-full">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">{Description}</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col w-full items-center border-b border-teal-500 py-2">
            {formInputFields &&
              formInputFields.map((field, index) => {
                return (
                  <GeneralInput
                    key={index}
                    placeholder={field.placeholder}
                    value={field.value}
                    type={field.type}
                    aria-label={field["aria-label"]}
                    onChange={field.onChange}
                    className="bg-transparent border-teal-500 border-solid border-b-2 m-6 w-full outline-none"
                    required={field.required}
                  />
                );
              })}
            {children}
            {FormButton}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralForm;
