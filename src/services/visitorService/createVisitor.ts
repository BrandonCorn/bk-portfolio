import { BadRequestError } from "@/lib/errors/bad-request-error";
import prisma from "@/lib/prismaDb";
import { Prisma, Visitors } from '@prisma/client'


export const createVisitor = async (visitorData: Prisma.VisitorsUncheckedCreateInput): Promise<Visitors | boolean> => {
  const { sms, ...data } = visitorData;
  try{
    const newUser = await prisma.visitors.create({
      data
    });
    return newUser;
  }
  catch(error){
    console.log(error);
    throw new BadRequestError(error as string);
  }
}