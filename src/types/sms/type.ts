import { Messages } from "@prisma/client";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";
import { CustomResponse } from "../common/type";

//Requests
export type SendSmsRequest = {
  name: string;
  email?: string;
  phoneNumber?: string;
  message: string;
}


//ADD RESPONSE FOR TWILIO SEND SMS
export type SendSmsResponse = Promise<CustomResponse<MessageInstance>>

export type CreateSmsRequest = {
  id?: string;
  content: string;
  dateSent: Date;
  visitorsId: string;
}

export type CreateSmsResponse = Promise<CustomResponse<Messages | false>>


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