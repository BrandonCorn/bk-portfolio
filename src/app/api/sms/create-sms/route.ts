import { NextRequest, NextResponse } from "next/server";
import { createSms } from "@/services/visitorService/sms/create-sms";
import { BadRequestError } from "@/lib/errors/bad-request-error";

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const { ...smsData } = data;
  try{
    const created = await createSms(data);
    if (created) return NextResponse.json(created);
    else return NextResponse.json({error: 'Could not create Sms', status: 400}); 
  }

  catch(err){
    console.error('Error retrieving visitor', err);
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message, status: err.statusCode})
    }
    else return NextResponse.json({error: 'A server error ocurred', status: 500})
  }

}