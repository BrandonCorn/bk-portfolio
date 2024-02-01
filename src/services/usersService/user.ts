import { BadRequestError } from "@/lib/errors/bad-request-error";
import { DatabaseConnectionError } from "@/lib/errors/database-connection-error";
import prisma from "@/lib/prismaDb";
import { Prisma, User } from '@prisma/client'

export async function createUser(user: Prisma.UserUncheckedCreateInput): Promise<Prisma.UserUncheckedCreateInput>{
  try{
    const newUser = await prisma.user.create({
      data: user
    });
    return newUser;
  }
  catch(error: any){
    console.error(error);
    if(error?.code === 'P2002'){
      return new BadRequestError('User already exists');
    }
    throw new DatabaseConnectionError(error as string);
  }
}


export async function getUser(email: string): Promise<User | null>{
  try{
    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    });
    
    return user || null;
  }
  catch(error){
    console.error(error);
    throw new DatabaseConnectionError(error as string)
  }
}
