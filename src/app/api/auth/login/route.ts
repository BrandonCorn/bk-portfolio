import { NextRequest, NextResponse } from "next/server";
import { PasswordManager } from "@/services/authService/auth";
import { getUser } from "@/services/usersService/user";
import { BadRequestError } from "@/lib/errors/bad-request-error";

type SignInUserBody = {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const userData: SignInUserBody = await req.json();

  const findUser = await getUser(userData.email);

  if (!findUser) return NextResponse.json({ error: new BadRequestError('User not found')});
  let approved: boolean;
  if (findUser.password) {
    approved = await PasswordManager.compare(findUser.password, userData.password);
  }
  else approved = false;

  return approved !==  false ? NextResponse.json(findUser) : NextResponse.json(false);
}