import { PasswordManager } from "@/services/authService/auth";
import { createUser } from "@/services/usersService/user";
import { NextRequest, NextResponse } from "next/server";
import { SignUpUserBody } from "@/types/user/user";
import { BadRequestError } from "@/lib/errors/bad-request-error";


export async function POST(req: NextRequest){
  const data: SignUpUserBody = await req.json();
  const encryptedPassword = await PasswordManager.toHash(data.password);
  let user;
  try{
    user = await createUser({
      name: data.name,
      email: data.email,
      password: encryptedPassword
    });
  }
  catch(error){
    return NextResponse.json( { error: 'Something went wrong' }, { status: 500 })
  }
  
  if(user instanceof BadRequestError) {
    const error = user;
    return NextResponse.json({ error: error.message }, {status: error.code });
  }
  else{
    return NextResponse.json({ user }, { status: 201});
  }
}