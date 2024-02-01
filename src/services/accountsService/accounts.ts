import { DatabaseConnectionError } from "@/lib/errors/database-connection-error";
import prisma from "@/lib/prismaDb";
import { Account } from '@prisma/client'

export async function getAccount(id: string): Promise<Account | null>{
  try{
    const account = await prisma.account.findFirst({
      where: {
        userId: id
      }
    });
    
    return account || null;
  }
  catch(error){
    console.error(error);
    throw new DatabaseConnectionError(error as string)
  }
}