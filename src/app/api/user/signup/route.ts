import { PasswordManager } from "@/services/authService/auth";
import { createUser } from "@/services/usersService/user";
import { NextRequest, NextResponse } from "next/server";
import { SignUpUserBody } from "@/types/user/user";
import { BadRequestError } from "@/lib/errors/bad-request-error";


// type SignUpUserBody = {
//   name: string;
//   email: string;
//   password: string;
// }

export async function POST(req: NextRequest){
  const data: SignUpUserBody = await req.json();
  const encryptedPassword = await PasswordManager.toHash(data.password);
  const user = await createUser({
    name: data.name,
    email: data.email,
    password: encryptedPassword
  });
  
  if(!user) {
    const error = new BadRequestError('Failed to create user');
    return NextResponse.json({ error }, {status: error.code });
  }
  else{
    return NextResponse.json({ user }, { status: 201});
  }
}