import { Sms } from "@prisma/client";
import { CustomResponse } from "../common/type";

export type SendMessage = {
  email?: string;
  phone?: string;
  message: string;
}

export type SendMessageRequest = {
  name: string;
  email?: string;
  phone?: string;
  message: string;
}

export type SendMessageResponse = Promise<CustomResponse<any>>

export type MessageDetails = {
  name: string;
  email?: string;
  phoneNumber?: string;
  message: string;
}