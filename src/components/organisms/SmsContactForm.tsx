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
import SuccessModal from "../molecules/modals/SuccessModal";
import { useAppDispatch, useAppSelector } from "@/redux";
import {
  updateSmsSent,
  createVisitor,
  setVisitor,
} from "@/redux/slices/visitorSlice";
import { CreateVisitorRoute } from "@/types/visitors/visitors";
import { Visitors } from "@prisma/client";

const formDescription =
  "Are you looking for a developer? Let's chat and see how we can succeed.";

const SmsContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { _persist, ...visitor } = useAppSelector((state) => state.visitor);
  const dispatch = useAppDispatch();
  const isInitialRender = useRef(true);

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

  const resetAllData = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //Send sms to visitor and save their info
  const handleSubmit: FormEventHandler<
    HTMLFormElement | HTMLButtonElement
  > = async (e) => {
    e.preventDefault();

    const findVisitor = await getVisitor(email);
    if (findVisitor) {
      dispatch(setVisitor(findVisitor));
    }

    if (visitor.sms && visitor.sms.length < 3) {
      //   alert(`already sent an sms`);
      //   console.log("already sent sms", visitor);
      // } else {
      //   const data = {
      //     name,
      //     email,
      //     phoneNumber,
      //     message,
      //   };

      //   const res = await fetch("/api/sms/send-sms", {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //     headers: {
      //       "Allow-Content-Type": "application/json",
      //     },
      //   });

      let res = { ok: true };
      if (res.ok) {
        //if we have a visitor already, let's just add to their data, otherwise we'll create one
        let sms = { content: message, dateSent: new Date(Date.now()) };

        if (!findVisitor) {
          dispatch(createVisitor({ name, email, phoneNumber }));
        }
        //update to use date sent back from Twilio
        dispatch(updateSmsSent(sms));
      } else {
        console.log("error sending message");
      }
    }
    resetAllData();
  };

  //Save visitors to the db
  const saveVisitor = async (visitorData: CreateVisitorRoute) => {
    return fetch("/api/visitors/create-visitor", {
      body: JSON.stringify(visitorData),
      method: "POST",
      headers: {
        "Allow-Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  //Get visitor from db from their email
  const getVisitor = async (email: string) => {
    return fetch(`/api/visitors/get-visitor`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Allow-Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  //Save the visitors sms
  const saveSms = async (sms: any) => {
    return fetch("/api/sms/create-sms", {
      method: "POST",
      body: JSON.stringify(sms),
      headers: {
        "Allow-Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    //don't need visitor data or rerender so issue db query to update with visitor info
    if (!isInitialRender.current) console.log("visitor ", visitor);
  }, [visitor]);

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
  };

  const messageProps = {
    placeholder: "Tell me what your reaching out for!",
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
          rows={6} // You can set the number of visible rows
          cols={60}
        />
      </GeneralForm>
      <p className="mt-8"> Pay kindness forward! </p>
      {/* <SuccessModal /> */}
    </motion.div>
  );
};

export default SmsContactForm;
