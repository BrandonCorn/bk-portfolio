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
    return false;
  }
}

//crud ops to follow