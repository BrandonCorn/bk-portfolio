import { NextRequest, NextResponse } from "next/server";
import { getVisitorByEmail } from "@/services/visitorService/getVisitor";
import { BadRequestError } from "@/lib/errors/bad-request-error";
import { GetVisitorByEmailRoute } from "@/types/visitors/visitors";


export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const {email}: GetVisitorByEmailRoute = data;

  try{
    const findVisitor = await getVisitorByEmail(email);
    if (findVisitor) return NextResponse.json(findVisitor);
    else return NextResponse.json(false)
  }
  catch(err){
    console.error('Error retrieving visitor', err);
    if (err instanceof BadRequestError){
      return NextResponse.json({error: err.message, status: err.statusCode})
    }
    else return NextResponse.json({error: 'A server error ocurred', status: 500})
  }
}