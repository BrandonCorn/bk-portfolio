import { NextRequest, NextResponse } from "next/server";
import { createMessage } from "@/services/messageService/create-message";
import { BadRequestError } from "@/lib/errors/bad-request-error";

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  try{
    const created = await createMessage(data);
    if (created) return NextResponse.json(created);
    else return NextResponse.json(false); 
  }

  catch(err){
    console.error('Error creating message', err);
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message}, { status: err.code})
    }
    else return NextResponse.json({error: 'A server error ocurred'}, { status: 500 })
  }

}