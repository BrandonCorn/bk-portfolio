"use client";

import GeneralForm from "@/components/molecules/forms/GeneralForm";
import DescriptionText from "@/components/atoms/text/DescriptionText";
import GeneralInput, {
  GeneralInputProps,
} from "@/components/atoms/input/GeneralInput";
import GeneralButton, {
  GeneralButtonProps,
} from "@/components/atoms/buttons/GeneralButton";
import { useState, ChangeEventHandler } from "react";
import { motion } from "framer-motion";

const formDescription =
  "Are you looking for a developer? Let's chat and see how we can succeed.";

const SmsContactForm = () => {
  const [value, setValue] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {};

  const inputProps: GeneralInputProps = {
    placeholder: "Phone Number",
    type: "phone",
    value: value,
    onChange: handleInputChange,
  };

  const buttonProps: GeneralButtonProps = {
    text: "Send SMS",
    onSubmit: handleSubmit,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="p-12 border-2 border-solid border-gray-300 dark:border-white rounded-xl"
    >
      <GeneralForm
        Description={<DescriptionText text={formDescription} />}
        FormInput={
          <GeneralInput
            placeholder={inputProps.placeholder}
            type={inputProps.type}
            value={inputProps.value}
            onChange={inputProps.onChange}
          />
        }
        FormButton={
          <GeneralButton
            text={buttonProps.text}
            onSubmit={buttonProps.onSubmit}
          />
        }
      />
      <p className="mt-8"> Message about texting permission</p>
    </motion.div>
  );
};

export default SmsContactForm;
