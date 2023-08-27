import { PasswordManager } from "@/services/authService/auth";
import { createUser } from "@/services/usersService/user";
import { NextRequest, NextResponse } from "next/server";


type CreateUserBody = {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest){
  const data: CreateUserBody = await req.json();
  const encryptedPassword = await PasswordManager.toHash(data.password);
  const user = await createUser({
    name: data.name,
    email: data.email,
    password: encryptedPassword
  });
  
  if(!user) {
    return NextResponse.json({message: 'Failed to create user'}, {status: 400});
  }
  else{
    return NextResponse.json({ user }, { status: 201});
  }
}