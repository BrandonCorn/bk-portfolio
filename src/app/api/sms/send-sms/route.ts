import twilio from 'twilio';
import { NextRequest, NextResponse } from 'next/server';
import { formatSms } from '@/services/utilService/utils';
import { sendSms } from '@/services/twilioServices/sms/send-sms';
import { BadRequestError } from '@/lib/errors/bad-request-error';
import { SendSmsDataRoute } from '@/types/sms/sms';



export const POST = async (req: NextRequest) => {
  const data: SendSmsDataRoute = await req.json();
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
      console.log('send message function result ', sendMessage);
      return NextResponse.json(sendMessage);
    }
    else {
      return NextResponse.json({ error: 'An error occured sending message'}, { status: 400 })
    }
  }
  catch(err){
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message, status: err.statusCode})
    }
    else return NextResponse.json({error: 'A server error ocurred', status: 500})
  }
}