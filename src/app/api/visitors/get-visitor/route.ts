import { NextRequest, NextResponse } from "next/server";
import { getVisitorByEmail } from "@/services/visitorService/getVisitor";
import { BadRequestError } from "@/lib/errors/bad-request-error";


export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const {email} = data;

  try{
    const findVisitor = await getVisitorByEmail(email);
    if (findVisitor) return NextResponse.json(findVisitor);
    else return NextResponse.json(false)
  }
  catch(err){
    console.error('Error retrieving visitor', err);
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message}, { status: err.code})
    }
    else return NextResponse.json({error: 'A server error ocurred'}, { status: 500})
  }
}