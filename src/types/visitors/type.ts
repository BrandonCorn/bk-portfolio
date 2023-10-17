import { Prisma, Visitors } from "@prisma/client";
import { ErrorResponse } from "../errors/type";
import { CustomResponse } from "../common/type";

//Requests & Responses
export type GetVisitorByEmailRequest = string

export type GetVisitorByEmailResponse =  Promise<CustomResponse<Visitors | false>>;

export type CreateVisitorRequest = {
  id?: string
  name?: string
  email?: string | null
  phoneNumber?: string | null
  visitCount?: number
  lastVisit?: Date | string
}

export type CreateVisitorResponse = Promise<CustomResponse<Visitors | false>>



//SERVICES
export type CreateVisitorService = Prisma.VisitorsUncheckedCreateInput;
