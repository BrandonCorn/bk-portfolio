import { BadRequestError } from "@/lib/errors/bad-request-error";
import prisma from "@/lib/prismaDb";
import { Prisma, Sms } from '@prisma/client'


export const createSms = async (smsData: Prisma.SmsUncheckedCreateInput): Promise<Sms | boolean> => {
  try{
    const newSms = await prisma.sms.create({
      data: smsData
    });
    return newSms;
  }
  catch(error){
    console.log(error);
    throw new BadRequestError(error as string);
  }
}