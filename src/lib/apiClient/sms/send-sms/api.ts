import { SendSmsRequest, SendSmsResponse } from "@/types/sms/type";
import { formatResponse } from "@/services/utilService/utils";
import { baseUrl } from "../..";


export const sendSms = async (smsData: SendSmsRequest): SendSmsResponse => {
  return fetch(`${baseUrl}/api/sms/send-sms`, {
    method: "POST",
    body: JSON.stringify(smsData),
    headers: {
      "Allow-Content-Type": "application/json",
    },
  }).then(response => formatResponse(response))
}