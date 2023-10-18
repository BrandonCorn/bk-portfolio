import { CreateSmsRequest, CreateSmsResponse } from "@/types/sms/type";
import { formatResponse } from "@/services/utilService/utils";


/**
 * Create an Sms in the db
 * @param {CreateSmsRequest} sms 
 * @returns {CreateSmsResponse}
 */
export const createSms = async (sms: CreateSmsRequest): CreateSmsResponse => {
  return fetch("/api/sms/create-sms", {
    method: "POST",
    body: JSON.stringify(sms),
    headers: {
      "Allow-Content-Type": "application/json",
    },
  }).then(response => formatResponse(response));
};