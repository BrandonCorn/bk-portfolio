import { BadRequestError } from "@/lib/errors/bad-request-error";
import prisma from "@/lib/prismaDb";
import { Visitors } from '@prisma/client'
import { v4 } from 'uuid';
import { CreateVisitorService } from "@/types/visitors/type";

/**
 * 
 * @param visitorData
 * @returns 
 */
export const createVisitor = async (visitorData: CreateVisitorService): Promise<Visitors | boolean> => {
  const { ...data } = visitorData;
  const addtionalData: Partial<Visitors> = {
    id: v4(),
    visitCount: 1,
    lastVisit: new Date(Date.now())
  }
  try{
    const newUser = await prisma.visitors.create({
      data: { ...data, ...addtionalData}
    });
    return newUser;
  }
  catch(error){
    console.log(error);
    throw new BadRequestError(error as string);
  }
}