import { NextRequest, NextResponse } from "next/server";
import { getVisitorByEmail } from "@/services/visitorService/getVisitor";
import { BadRequestError } from "@/lib/errors/bad-request-error";
import { CreateVisitorRequest, CreateVisitorResponse } from "@/types/visitors/type";
import { createVisitor } from "@/services/visitorService/createVisitor";


export const POST = async (req: NextRequest): Promise<NextResponse<unknown>> => {
  const data = await req.json();
  const { ...visitorData }: CreateVisitorRequest = data;

  try{
    
    const createdVisitor = await createVisitor(visitorData);
    console.log(createdVisitor);
    if (createdVisitor) return NextResponse.json(createdVisitor);
    else return NextResponse.json(false)
  }
  catch(err){
    console.error('Error creating visitor', err);
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message}, { status: err.code })
    }
    else return NextResponse.json({error: 'A server error ocurred'}, { status: 500})
  }
}