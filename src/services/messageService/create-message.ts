import { BadRequestError } from "@/lib/errors/bad-request-error";
import prisma from "@/lib/prismaDb";
import { Prisma, Messages } from '@prisma/client'


export const createMessage = async (msgData: Prisma.MessagesUncheckedCreateInput): Promise<Messages | boolean> => {
  try{
    const newMsg = await prisma.messages.create({
      data: msgData
    });
    return newMsg;
  }
  catch(error){
    console.log(error);
    throw new BadRequestError(error as string);
  }
}