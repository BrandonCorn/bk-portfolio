import { formatResponse } from "@/services/utilService/utils";
import { SendMessageRequest, SendMessageResponse } from "@/types/email/type";


export const sendEmail = async (msgData: SendMessageRequest): SendMessageResponse => {
  return fetch(`/api/email/send-email`, {
    method: "POST",
    body: JSON.stringify(msgData),
    headers: {
      "Allow-Content-Type": "application/json",
    },
  }).then(response => formatResponse(response))
}