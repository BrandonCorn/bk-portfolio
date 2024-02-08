import { NextRequest, NextResponse } from "next/server";
import { createSms } from "@/services/smsService/sms/create-sms";
import { BadRequestError } from "@/lib/errors/bad-request-error";
import { CreateSmsRequest } from "@/types/sms/type";

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  try{
    const created = await createSms(data);
    if (created) return NextResponse.json(created);
    else return NextResponse.json(false); 
  }

  catch(err){
    console.error('Error retrieving visitor', err);
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message}, { status: err.code})
    }
    else return NextResponse.json({error: 'A server error ocurred'}, { status: 500 })
  }

}