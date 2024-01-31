import { NextRequest, NextResponse } from "next/server";
import { PasswordManager } from "@/services/authService/auth";
import { getUser } from "@/services/usersService/user";
import { BadRequestError } from "@/lib/errors/bad-request-error";
import { NotFoundError } from "@/lib/errors/not-found-error";

type SignInUserBody = {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const userData: SignInUserBody = await req.json();
  const findUser = await getUser(userData.email).catch(error => error);

  if(!findUser) {
    const error = new NotFoundError('User not found');
    return NextResponse.json({ error }, { status: error.code });
  }
  if (findUser instanceof BadRequestError) {
    return NextResponse.json({ error: findUser }, { status: findUser.code })
  }

  let approved  = false;
  if (findUser.password) {
    approved = await PasswordManager.compare(findUser.password, userData.password);
  }

  return approved !==  false ? NextResponse.json(findUser) : NextResponse.json(false);
}