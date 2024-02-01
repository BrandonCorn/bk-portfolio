import { NextRequest, NextResponse } from "next/server";
import { getAccount } from "@/services/accountsService/accounts";
import { NotFoundError } from "@/lib/errors/not-found-error";


export const GET = async (req: NextRequest, res: NextResponse) => {
  const userId = req.nextUrl.searchParams.get('userId');

  let userAccount;
  try{
    if(userId) userAccount = await getAccount(userId);
  }
  catch(error){
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }

  if(!userAccount){
    // user has no account
    const notFound = new NotFoundError('User has no account'); 
    return NextResponse.json( { error: notFound.message }, { status: notFound.code })
  }

  return NextResponse.json(userAccount);
}