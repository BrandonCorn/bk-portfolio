import { BadRequestError } from "@/lib/errors/bad-request-error";
import prisma from "@/lib/prismaDb";
import { Visitors } from '@prisma/client'
import { VisitorsWithSms } from "@/types/visitors/type";

type GetVisitorByEmail = {
  email: string;
}

export const getVisitorByEmail = async (email: GetVisitorByEmail): Promise<VisitorsWithSms | boolean> => {
  const extractEmail = email.email;
  try{
    const  foundVisitor = await prisma.visitors.findUnique({
      where: {
        email: extractEmail,
      },
      include: {
        Messages: true
      }
    }); 
    if (foundVisitor) {
      return {
        messages: foundVisitor.Messages,
        ...foundVisitor
      }
    }
    // if (foundVisitor) return foundVisitor;
    else return false;
  }
  catch(error){
    console.error(error);
    throw new BadRequestError(error as string);
  }
}