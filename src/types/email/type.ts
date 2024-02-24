import { Messages } from "@prisma/client";
import { CustomResponse } from "../common/type";
import { CreateSmsRequest } from "../sms/type";

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

export type CreateMessageRequest = CreateSmsRequest;

export type CreateMessageResponse = Promise<CustomResponse<Messages | false>>