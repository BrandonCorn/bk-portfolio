import twilio from 'twilio';
import { NextRequest, NextResponse } from 'next/server';

export type SendSmsData = {
  name: string;
  email: string
  phoneNumber?: string;
  message: string;
}



export const POST = async (req: NextRequest) => {
  const data: SendSmsData = await req.json();
  console.log('sms data', data);
  
  //validate phone number with util function
  //send text to myself of that phone number and contact information
  //return response of receiving text
}