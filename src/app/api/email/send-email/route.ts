import { NextRequest, NextResponse } from 'next/server';
import { formatMsg } from '@/services/utilService/utils';
import { BadRequestError } from '@/lib/errors/bad-request-error';
import { SendMessageRequest } from '@/types/email/type';
import { sendEmail } from '@/services/twilioServices/email/send-email';



export const POST = async (req: NextRequest) => {
  const {name, email, phone, message}: SendMessageRequest = await req.json();
  console.log(name, email, phone, message);
  try{
    if(!name || !message || !(email || phone)){
      return NextResponse.json({ error: 'Missing data to send message'}, { status: 400 })
    }
    else {
      const formatMessage = formatMsg({name, email, phoneNumber: phone, message});
      const msgData = {
        email, phone, message: formatMessage
      }
      const sendMessage = await sendEmail(msgData);
      return NextResponse.json(sendMessage, {status: 200});
    }
  }
  catch(err){
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message}, { status: err.code})
    }
    else return NextResponse.json({error: 'A server error ocurred'}, {status: 500})
  }
}