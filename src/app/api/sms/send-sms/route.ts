import twilio from 'twilio';
import { NextRequest, NextResponse } from 'next/server';
import { formatSms } from '@/services/utilService/utils';
import { sendSms } from '@/services/twilioServices/sms/send-sms';

export type SendSmsData = {
  name: string;
  email: string
  phoneNumber?: string;
  message: string;
}



export const POST = async (req: NextRequest) => {
  const data: SendSmsData = await req.json();
  console.log('sms data', data);
  let to, from;
  if (process.env.TWILIO_FROM_PHONE) to = process.env.TWILIO_FROM_PHONE;
  if (process.env.MY_PHONE) from = process.env.MY_PHONE;
  if(to && from){
    const formatMessage = formatSms(data);
    const msgData = {
      fromPhoneNumber: to,
      toPhoneNumber: from,
      message: formatMessage
    }
    const sendMessage = await sendSms(msgData);
    console.log('send message function result ', sendMessage);
    return NextResponse.json(sendMessage);
  }
  else {
    return NextResponse.json({ error: 'An error occured sending message'}, { status: 400 })
  }

}