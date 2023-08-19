import { createUser } from "@/services/usersService/user";
import { NextRequest, NextResponse } from "next/server";


type CreateUserBody = {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest){
  const data = await req.json();
  const user = await createUser({
    name: data.name,
    email: data.email,
    password: data.password
  });
  console.log('user', user);
  if(!user) {
    return NextResponse.json({message: 'Failed to create user'}, {status: 400});
  }
  else{
    return NextResponse.json({ user }, { status: 201});
  }
}