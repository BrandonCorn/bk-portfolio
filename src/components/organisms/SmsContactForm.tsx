"use client";

import GeneralForm from "@/components/molecules/forms/GeneralForm";
import DescriptionText from "@/components/atoms/text/DescriptionText";
import { GeneralInputProps } from "@/components/atoms/input/GeneralInput";
import GeneralButton, {
  GeneralButtonProps,
} from "@/components/atoms/buttons/GeneralButton";
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { motion } from "framer-motion";
import SuccessModal from "../molecules/modals/SuccessModal/SuccessModal";
import FailureModal from "../molecules/modals/FailureModal/FailureModal";
import { useAppDispatch, useAppSelector } from "@/redux";
import {
  createVisitor,
  getVisitorByEmail,
  updateVisitorSms,
} from "@/redux/slices/visitorSlice";
import { sendSms, createSms } from "@/redux/slices/smsSlice";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";

const formDescription =
  "Are you looking for a developer? Let's chat and see how we can work together!";

type ModalInfo = {
  show: boolean;
  title: string;
  message: string;
};

const SmsContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [successModalInfo, setSuccessModalInfo] = useState<ModalInfo>({
    show: false,
    title: "",
    message: "",
  });
  const [failureModalInfo, setFailureModalInfo] = useState<ModalInfo>({
    show: false,
    title: "",
    message: "",
  });
  const visitor = useAppSelector((state) => state.visitor);
  const dispatch = useAppDispatch();

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  const handlePhoneNumberChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPhoneNumber(e.target.value);
  };

  const updateSuccesModal = (modal: ModalInfo) => {
    setSuccessModalInfo({ ...modal });
  };

  const updateFailureModal = (modal: ModalInfo) => {
    setFailureModalInfo({ ...modal });
  };

  const resetMessageData = () => {
    setMessage("");
  };

  const closeModal = () => {
    setSuccessModalInfo((prev) => ({ ...prev, show: false }));
    setFailureModalInfo((prev) => ({ ...prev, show: false }));
  };

  // const autoCloseModal = (modal: ModalType) => {
  //   setTimeout(() => {
  //     closeModal();
  //   }, 3000);
  // };

  //Send sms to visitor and save their info
  const handleSubmit: FormEventHandler<
    HTMLFormElement | HTMLButtonElement
  > = async (e) => {
    e.preventDefault();

    //find visitors and if they don't exist create one
    let findVisitor;
    if (!visitor.visitor.email) {
      findVisitor = await dispatch(getVisitorByEmail(email)).unwrap();
      if (!findVisitor) {
        const newVisitor = { name, email, phoneNumber };
        findVisitor = await dispatch(createVisitor(newVisitor)).unwrap();
        //need to implement retry logic to store the users data, until then save with no id
        if (!findVisitor) {
          findVisitor = { id: "", name, email, phoneNumber, sms: [] };
        }
      }
    } else {
      findVisitor = visitor.visitor;
    }

    //two conditions, we have visitor with sms cause we found them or we have a visitor without sms because we had to create them an sms array is empty and not included
    if ("sms" in findVisitor && findVisitor.sms.length >= 2) {
      updateFailureModal({
        show: true,
        title: "I wish we could talk more!",
        message:
          "Sorry, It looks you've sent too many messages. Please feel free to reach out to me via email or text",
      });
    } else {
      const data = {
        name: findVisitor.name,
        email: findVisitor.email,
        phoneNumber: findVisitor.phoneNumber,
        message,
      };
      const sentSms = await dispatch(sendSms(data));
      if (sentSms.meta.requestStatus === "fulfilled") {
        updateSuccesModal({
          show: true,
          title: "Hooray, you did it!",
          message:
            "Your message has been sent. I appreciate it and I'll reach out soon as I can!",
        });

        let oneSms = sentSms.payload as MessageInstance;
        if (findVisitor.id) {
          dispatch(
            updateVisitorSms({ visitorId: findVisitor.id, ...oneSms } as any)
          );
          await dispatch(
            createSms({
              id: oneSms.sid,
              dateSent: oneSms.dateCreated,
              content: message,
              visitorsId: findVisitor.id,
            })
          );
        }
      } else {
        updateFailureModal({
          show: true,
          title: "This is embarrassing",
          message: "Please, reach out and let me know went wrong!",
        });
      }
    }
    console.log("at the end my visitor is ", visitor);
    resetMessageData();
  };

  const nameProps: GeneralInputProps = {
    placeholder: "Name",
    value: name,
    type: "text",
    ariaLabel: "name",
    onChange: handleNameChange,
    required: true,
  };

  const phoneNumberProps: GeneralInputProps = {
    placeholder: "Phone Number",
    type: "phone",
    value: phoneNumber,
    onChange: handlePhoneNumberChange,
  };

  const emailProps: GeneralInputProps = {
    placeholder: "Email",
    type: "email",
    value: email,
    onChange: handleEmailChange,
    required: true,
  };

  const messageProps = {
    placeholder: "Speak your mind..",
    type: "text",
    value: message,
    onChange: handleMessageChange,
  };

  const buttonProps: GeneralButtonProps = {
    text: "Send SMS",
    onSubmit: handleSubmit,
  };

  const formProps = {
    onSubmit: handleSubmit as FormEventHandler<HTMLFormElement>,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center flex-col p-12 border-2 border-solid border-gray-300 dark:border-white rounded-xl"
    >
      <GeneralForm
        Description={<DescriptionText text={formDescription} />}
        formInputFields={[nameProps, phoneNumberProps, emailProps]}
        FormButton={
          <GeneralButton
            text={buttonProps.text}
            onSubmit={buttonProps.onSubmit}
          />
        }
        onSubmit={formProps.onSubmit}
      >
        <textarea
          className="bg-transparent border-solid border-zinc-200 border-1 p-2 w-full"
          placeholder={messageProps.placeholder}
          value={messageProps.value}
          onChange={messageProps.onChange}
          rows={6}
          cols={60}
          minLength={5}
          required={true}
        />
      </GeneralForm>
      <p className="mt-8"> Pay kindness forward! </p>
      {successModalInfo.show && (
        <SuccessModal
          title={successModalInfo.title}
          message={successModalInfo.message}
          isOpen={successModalInfo.show}
          closeModal={closeModal}
        />
      )}
      {failureModalInfo.show && (
        <FailureModal
          title={failureModalInfo.title}
          message={failureModalInfo.message}
          isOpen={failureModalInfo.show}
          closeModal={closeModal}
        />
      )}
    </motion.div>
  );
};

export default SmsContactForm;
