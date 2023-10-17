import twilio from 'twilio';
import { NextRequest, NextResponse } from 'next/server';
import { formatSms } from '@/services/utilService/utils';
import { sendSms } from '@/services/twilioServices/sms/send-sms';
import { BadRequestError } from '@/lib/errors/bad-request-error';
import { SendSmsRequest } from '@/types/sms/type';



export const POST = async (req: NextRequest) => {
  const data: SendSmsRequest = await req.json();
  let to, from;
  if (process.env.TWILIO_FROM_PHONE) to = process.env.TWILIO_FROM_PHONE;
  if (process.env.MY_PHONE) from = process.env.MY_PHONE;
  try{
    if(to && from){
      const formatMessage = formatSms(data);
      const msgData = {
        fromPhoneNumber: to,
        toPhoneNumber: from,
        message: formatMessage
      }
      const sendMessage = await sendSms(msgData);
      console.log(sendMessage);
      return NextResponse.json(sendMessage, {status: 200});
    }
    else {
      return NextResponse.json({ error: 'Missing phone numbers to send message'}, { status: 400 })
    }
  }
  catch(err){
    if (err instanceof BadRequestError){
      console.log('whats the error', err);
      return NextResponse.json({error: err.message}, { status: err.code})
    }
    else return NextResponse.json({error: 'A server error ocurred'}, {status: 500})
  }
}