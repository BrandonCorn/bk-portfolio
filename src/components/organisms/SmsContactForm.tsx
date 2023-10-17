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
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";

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
  const [modalInfo, setModalInfo] = useState<{
    status: ModalType;
    title: string;
    message: string;
  }>({ status: "failure", title: "", message: "" });
  const { visitor } = useAppSelector((state) => state.visitor);
  const sms = useAppSelector((state) => state.sms);
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

  const handleUpdateModalInfo = (modal: {
    status: ModalType;
    title: string;
    message: string;
  }) => {
    setModalInfo(modal);
  };

  const resetMessageData = () => {
    setMessage("");
  };

  const openModal = (modal: ModalType) => {
    if (modal === "success") setShowModal(true);
    else setShowFailureModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowFailureModal(false);
  };

  const autoCloseModal = (modal: ModalType) => {
    setTimeout(() => {
      closeModal();
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
    if (sms.sms && sms.sms.length >= 2) {
      handleUpdateModalInfo({
        status: "failure",
        title: "I wish we could talk more!",
        message:
          "Sorry, It looks you've sent too many messages. Please feel free to reach out to me via email or text",
      });
      openModal(modalInfo.status);
    } else {
      const data = {
        name: visitor.name,
        email: visitor.email,
        phoneNumber: visitor.phoneNumber,
        message,
      };

      const sentSms = await dispatch(sendSms(data));
      if (sentSms.meta.requestStatus === "fulfilled") {
        handleUpdateModalInfo({
          status: "success",
          title: "Hooray, you did it!",
          message:
            "Your message has been sent. I appreciate it and I'll reach out soon as I can!",
        });
      } else {
        handleUpdateModalInfo({
          status: "failure",
          title: "This is embarrassing",
          message: "Please, reach out and let me know went wrong!",
        });
      }
      openModal(modalInfo.status);

      if (visitor.id) {
        let oneSms = sentSms.payload as MessageInstance;
        const createdSms = await dispatch(
          createSms({
            id: oneSms.sid || v4(),
            dateSent: oneSms.dateCreated,
            content: message,
            visitorsId: visitor.id,
          })
        );
      }
    }
    resetMessageData();
  };

  useEffect(() => {
    console.log("visitor stuff", visitor);
    console.log("sms stuff ", sms);
  }, [visitor, sms]);

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
        title={modalInfo.title}
        message={modalInfo.message}
        isOpen={showModal}
        closeModal={closeModal}
      />
      <FailureModal
        title={modalInfo.title}
        message={modalInfo.message}
        isOpen={showFailureModal}
        closeModal={closeModal}
      />
    </motion.div>
  );
};

export default SmsContactForm;
