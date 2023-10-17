"use client";

import GeneralForm from "@/components/molecules/forms/GeneralForm";
import DescriptionText from "@/components/atoms/text/DescriptionText";
import { GeneralInputProps } from "@/components/atoms/input/GeneralInput";
import GeneralButton, {
  GeneralButtonProps,
} from "@/components/atoms/buttons/GeneralButton";
import {
  useState,
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
} from "react";
import { motion } from "framer-motion";
import SuccessModal from "../molecules/modals/SuccessModal/SuccessModal";
import FailureModal from "../molecules/modals/FailureModal/FailureModal";
import { useAppDispatch, useAppSelector } from "@/redux";
import { createVisitor, getVisitorByEmail } from "@/redux/slices/visitorSlice";
import { sendSms, createSms } from "@/redux/slices/smsSlice";
import { v4 } from "uuid";

const formDescription =
  "Are you looking for a developer? Let's chat and see how we can work together!";

type ModalType = "success" | "failure";

const SmsContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const { visitor } = useAppSelector((state) => state.visitor);
  const { sms } = useAppSelector((state) => state.sms);
  const dispatch = useAppDispatch();

  const modalObj: { status: ModalType; title: string; message: string } = {
    status: "failure",
    title: "",
    message: "",
  };

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

  const resetMessageData = () => {
    setMessage("");
  };

  const openModal = (modal: ModalType) => {
    if (modal === "success") setShowModal(true);
    else if (modal === "failure") setShowFailureModal(true);
  };

  const closeModal = (modal: ModalType) => {
    if (modal === "success") setShowModal(false);
    else if (modal === "failure") setShowFailureModal(false);
  };

  const autoCloseModal = (modal: ModalType) => {
    setTimeout(() => {
      closeModal(modal);
    }, 3000);
  };

  //Send sms to visitor and save their info
  const handleSubmit: FormEventHandler<
    HTMLFormElement | HTMLButtonElement
  > = async (e) => {
    e.preventDefault();

    let findVisitor;
    if (!visitor.email) {
      findVisitor = await dispatch(getVisitorByEmail(email));
      if (!findVisitor.payload) {
        const visitor = { name, email, phoneNumber };
        await dispatch(createVisitor(visitor));
      }
    }

    if (visitor.sms && visitor.sms.length > 3) {
      modalObj.status = "failure";
      modalObj.title = "I wish we could talk more!";
      modalObj.message =
        "Sorry, It looks you've sent too many messages. Please feel free to reach out to me via email or text";
    } else {
      const data = {
        name: visitor.name,
        email: visitor.email,
        phoneNumber: visitor.phoneNumber,
        message,
      };

      const sentSms = await dispatch(sendSms(data));
      if (!sentSms.payload) {
        modalObj.status = "success";
        modalObj.title = "Hooray, you did it!";
        modalObj.message =
          "Your message has been sent. I appreciate it and I'll reach out soon as I can!";
      } else {
        modalObj.status = "failure";
        modalObj.title = "This is embarrassing";
        modalObj.message = "Please, reach out and let me know went wrong!";
      }
      openModal(modalObj.status);

      let oneSms = sms[sms.length - 1];
      if (visitor.id && oneSms.dateSent) {
        const createdSms = await dispatch(
          createSms({
            id: oneSms.id || v4(),
            dateSent: oneSms.dateSent,
            content: message,
            visitorsId: visitor.id,
          })
        );
      }
    }
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
      <SuccessModal
        title={modalObj.title}
        message={modalObj.message}
        isOpen={showModal}
        closeModal={() => closeModal(modalObj.status)}
      />
      <FailureModal
        title={modalObj.title}
        message={modalObj.message}
        isOpen={showFailureModal}
        closeModal={() => closeModal(modalObj.status)}
      />
    </motion.div>
  );
};

export default SmsContactForm;
