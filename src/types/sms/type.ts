import { Sms } from "@prisma/client";
import { ErrorResponse } from "../errors/type";

//Requests
export type SendSmsDataRequest = {
  name: string;
  email: string
  phoneNumber?: string;
  message: string;
}

//ADD RESPONSE FOR TWILIO SEND SMS

export type CreateSmsRequest = {
  id: string;
  content: string;
  dateSent: Date;
}

export type CreateSmsResponse = Promise<Sms | false | unknown>


//SERVICES

//TWILIO SMS SERVICE TO SENT AN SMS
export interface SendSms {
  toPhoneNumber: string;
  fromPhoneNumber: string;
  message: string;
}

//UTIL SERVICE FOR FORMATTING SMS MESSAGE
export type SmsDetails = {
  name: string;
  phoneNumber?: string;
  email?: string;
  message: string;
}