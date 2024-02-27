"use client";

import GeneralForm from "@/components/molecules/Forms/GeneralForm/GeneralForm";
import DescriptionText from "@/components/atoms/Texts/DescriptionText/DescriptionText";
import GeneralInput from "@/components/atoms/Inputs/GeneralInput";
import React, {
  useState,
  FormEventHandler,
  useCallback,
  ChangeEventHandler,
} from "react";
import { motion } from "framer-motion";
import SuccessModal from "@/components/molecules/Modals/SuccessModal/SuccessModal";
import FailureModal from "@/components/molecules/Modals/FailureModal/FailureModal";
import { useAppDispatch, useAppSelector } from "@/redux";
import {
  createVisitor,
  getVisitorByEmail,
  updateVisitorMessages,
} from "@/redux/slices/visitorSlice/visitorSlice";
import {
  sendMessage,
  createMessage,
} from "@/redux/slices/messageSlice/messageSlice";
import LoadingButton, {
  LoadingButtonProps,
} from "../../../atoms/Buttons/LoadingButton/LoadingButton";
import { Message } from "../../../../redux/slices/messageSlice/messageSlice";

const formDescription =
  "Are you looking for a developer? Let's chat and see how we can work together!";

type ModalInfo = {
  show: boolean;
  title: string;
  message: string;
};

const ContactForm = () => {
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
  const [loading, setLoading] = useState(false);
  const visitor = useAppSelector((state) => state.visitor);
  const dispatch = useAppDispatch();

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setName(e.target.value);
    },
    []
  );

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    []
  );
  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> =
    useCallback((e) => {
      setMessage(e.target.value);
    }, []);

  const handlePhoneNumberChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setPhoneNumber(e.target.value);
    }, []);

  const updateSuccesModal = (modal: ModalInfo) => {
    setSuccessModalInfo({ ...modal });
  };

  const updateFailureModal = (modal: ModalInfo) => {
    setFailureModalInfo({ ...modal });
  };

  const resetMessageData = () => {
    setMessage("");
  };

  const handleLoading = (state: boolean) => {
    setLoading(state);
  };

  const closeModal = () => {
    setSuccessModalInfo((prev) => ({ ...prev, show: false }));
    setFailureModalInfo((prev) => ({ ...prev, show: false }));
  };

  //Send sms to visitor and save their info
  const handleSubmit: FormEventHandler<
    HTMLFormElement | HTMLButtonElement
  > = async (e) => {
    e.preventDefault();

    handleLoading(true);
    if (!message || !email) {
      handleLoading(false);
      updateFailureModal({
        title: "Oops",
        message:
          "Looks like were missing some info in the form. Please provide your email and a message",
        show: true,
      });
      return;
    }
    // find visitors and if they don't exist create one
    let findVisitor;
    if (!visitor.visitor.email) {
      findVisitor = await dispatch(getVisitorByEmail({ email })).unwrap();
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

    //two conditions, we have visitor with messages cause we found them or we have a visitor without sms because we had to create them an sms array is empty and not included
    if ("messages" in findVisitor && findVisitor.messages.length >= 2) {
      handleLoading(false);
      updateFailureModal({
        show: true,
        title: "I wish we could talk more!",
        message:
          "Sorry, It looks you've sent too many messages. Please feel free to reach out to me via email or text",
      });
    } else {
      const data = {
        name: findVisitor.name,
        email: findVisitor.email || email,
        phoneNumber: findVisitor.phoneNumber || phoneNumber,
        message,
      };
      const sentMessage = await dispatch(sendMessage(data));
      if (sentMessage.meta.requestStatus === "fulfilled") {
        setLoading(false);
        updateSuccesModal({
          show: true,
          title: "Hooray, you did it!",
          message:
            "Your message has been sent. I appreciate it and I'll reach out soon as I can!",
        });

        const sendMessageResponse = sentMessage.payload;
        const date = sendMessageResponse[0].headers.date;
        if (findVisitor.id) {
          dispatch(
            updateVisitorMessages({
              visitorId: findVisitor.id,
              content: message,
              dateSent: date,
            } as Message)
          );
          await dispatch(
            createMessage({
              dateSent: new Date(Date.now()),
              content: message,
              visitorsId: findVisitor.id,
            })
          );
        }
      } else {
        setLoading(false);
        updateFailureModal({
          show: true,
          title: "This is embarrassing",
          message: "Please, reach out and let me know went wrong!",
        });
      }
    }
    resetMessageData();
  };

  const formInputClasses =
    "bg-transparent border-sky-500 border-solid border-b-2 m-6 w-full outline-none";
  const FormInputFields = [
    <GeneralInput
      className={formInputClasses}
      key={`sms-input-1`}
      placeholder={"name"}
      value={name}
      type="text"
      onChange={handleNameChange}
      required
    />,
    <GeneralInput
      className={formInputClasses}
      key={`sms-input-2`}
      placeholder="Phone"
      value={phoneNumber}
      type="tel"
      onChange={handlePhoneNumberChange}
    />,
    <GeneralInput
      className={formInputClasses}
      key={`sms-input-3`}
      placeholder="Email"
      value={email}
      type="email"
      onChange={handleEmailChange}
      required
    />,
  ];

  const messageProps = {
    placeholder:
      "Temporarily disabled and awaiting phone number verification from Twilio. Sorry for the delay everyone!",
    type: "text",
    value: message,
    onChange: handleMessageChange,
  };

  const buttonProps: LoadingButtonProps = {
    text: "Send",
    loadingText: "Sending",
    onClick: handleSubmit,
    type: "submit",
    isLoading: loading,
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
        FormInputFields={FormInputFields}
        FormButton={
          <LoadingButton
            className={
              "h-10 w-40 bg-sky-500 hover:bg-sky-700 border-sky-500 hover:border-sky-700  text-sm border-4 text-white py-1 px-4 rounded"
            }
            isLoading={buttonProps.isLoading}
            text={buttonProps.text}
            loadingText={buttonProps.loadingText}
            onClick={handleSubmit}
            type={buttonProps.type}
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

export default ContactForm;
