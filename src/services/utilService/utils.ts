import { CustomResponse } from "@/types/common/type";
import { SmsDetails } from "@/types/sms/type"
import { MessageDetails } from "@/types/email/type";

/**
 * Formats the message sent to portfolio owner to format selected by them
 * @param {SmsDetails || MessageDetails} smsInfo 
 * @returns {string}
 */
export function formatMsg(smsInfo: SmsDetails | MessageDetails){
  return `You have a new message from ${smsInfo.name} @ ${smsInfo.email || smsInfo.phoneNumber}\n\n${smsInfo.message}`
}

/**
 * Format the response to type CustomResponse requirements based on success of api call
 * @param response 
 * @returns {Promise<CustomResponse<T>>}
 */
export const formatResponse = async <T>(response: Response): Promise<CustomResponse<T>> => {
  if (response.ok) {
    try {
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: { status: 500, statusText: 'Internal Server Error', message: 'Invalid JSON response' } };
    }
  } else {
    const message = await response.text();
    const err = {
      status: response.status,
      statusText: response.statusText,
      message,
    };
    return { success: false, error: err };
  }

}