import { Prisma, Visitors } from "@prisma/client";
import { ErrorResponse } from "../errors/type";

//Requests & Responses
export type GetVisitorByEmailRequest = string

export type GetVisitorByEmailResponse =  Promise<Visitors | false | ErrorResponse>;

export type CreateVisitorRequest = {
  id?: string
  name?: string
  email?: string | null
  phoneNumber?: string | null
  visitCount?: number
  lastVisit?: Date | string
}

export type CreateVisitorResponse = Promise<Visitors | false | ErrorResponse>



//SERVICES
export type CreateVisitorService = Prisma.VisitorsUncheckedCreateInput;
