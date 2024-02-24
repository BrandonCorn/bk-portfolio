import { formatResponse } from "@/services/utilService/utils";
import { CreateMessageRequest, CreateMessageResponse } from "@/types/email/type";

/**
 * Create an Sms in the db
 * @param {CreateMessageRequest} sms 
 * @returns {CreateMessageResponse}
 */
export const createMessage = async (msg: CreateMessageRequest): CreateMessageResponse => {
  return fetch(`/api/sms/create-sms`, {
    method: "POST",
    body: JSON.stringify(msg),
    headers: {
      "Allow-Content-Type": "application/json",
    },
  }).then(response => formatResponse(response));
};