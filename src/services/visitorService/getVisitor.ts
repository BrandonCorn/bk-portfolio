import { BadRequestError } from "@/lib/errors/bad-request-error";
import prisma from "@/lib/prismaDb";
import { Visitors } from '@prisma/client'
import { VisitorsWithSms } from "@/types/visitors/type";


export const getVisitorByEmail = async (email: string): Promise<VisitorsWithSms | boolean> => {
  try{
    const  foundVisitor = await prisma.visitors.findUnique({
      where: {
        email
      },
      include: {
        Sms: true
      }
    }); 
    if (foundVisitor) {
      return {
        sms: foundVisitor.Sms,
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