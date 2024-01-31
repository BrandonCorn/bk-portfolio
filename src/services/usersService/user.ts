import { BadRequestError } from "@/lib/errors/bad-request-error";
import prisma from "@/lib/prismaDb";
import { Prisma } from '@prisma/client'

export async function createUser(user: Prisma.UserUncheckedCreateInput): Promise<Prisma.UserUncheckedCreateInput | boolean>{
  try{
    const newUser = await prisma.user.create({
      data: user
    });
    return newUser;
  }
  catch(error){
    console.error(error);
    throw new BadRequestError(error as string);
  }
}


export async function getUser(email: string){
  try{
    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    });
    if(!user) return false;
    return user;
  }
  catch(error){
    console.error(error);
    throw new BadRequestError(error as string)
  }
}

//crud ops to follow