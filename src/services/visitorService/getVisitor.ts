import { BadRequestError } from "@/lib/errors/bad-request-error";
import prisma from "@/lib/prismaDb";
import { Visitors } from '@prisma/client'


export const getVisitorByEmail = async (email: string): Promise<Visitors | boolean> => {
  try{
    const foundVisitor = await prisma.visitors.findUnique({
      where: {
        email
      }
    }); 
    if (foundVisitor) return foundVisitor;
    else return false;
  }
  catch(error){
    console.log(error);
    throw new BadRequestError(error as string);
  }
}