import { DatabaseConnectionError } from "@/lib/errors/database-connection-error";
import prisma from "@/lib/prismaDb";
import { Prisma } from '@prisma/client'

export async function getAccount(id: string){
  try{
    const user = await prisma.account.findFirst({
      where: {
        userId: id
      }
    });
    if(!user) return false;
    return user;
  }
  catch(error){
    console.error(error);
    throw new DatabaseConnectionError(error as string)
  }
}