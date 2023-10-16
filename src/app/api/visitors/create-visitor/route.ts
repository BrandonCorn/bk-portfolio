import { NextRequest, NextResponse } from "next/server";
import { getVisitorByEmail } from "@/services/visitorService/getVisitor";
import { BadRequestError } from "@/lib/errors/bad-request-error";
import { CreateVisitorRoute } from "@/types/visitors/visitors";
import { createVisitor } from "@/services/visitorService/createVisitor";


export const POST = async (req: NextRequest) => {
  const data = await req.json();
  console.log('what happened ', data);
  const { ...visitorData }: CreateVisitorRoute = data;

  try{
    
    const createdVisitor = await createVisitor(visitorData);
    console.log(createdVisitor);
    if (createdVisitor) return NextResponse.json(createdVisitor);
    else return NextResponse.json(false)
  }
  catch(err){
    console.error('Error creating visitor', err);
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message, status: err.statusCode})
    }
    else return NextResponse.json({error: 'A server error ocurred', status: 500})
  }
}