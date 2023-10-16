import Twilio from 'twilio';
import { SendSms } from '@/types/sms/type';
import { BadRequestError } from '@/lib/errors/bad-request-error';

export const sendSms = async (smsInfo: SendSms) => {
  const { toPhoneNumber, fromPhoneNumber, message } = smsInfo;
  const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  try{
    return await client.messages.create({from: fromPhoneNumber, to: toPhoneNumber, body: message});
  }
  catch(error){
    console.log('error sending twilio sms', error);
    throw new BadRequestError('Error sending sms');
  }
}