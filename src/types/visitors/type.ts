import { Prisma, Visitors, Sms } from "@prisma/client";
import { ErrorResponse } from "../errors/type";
import { CustomResponse } from "../common/type";



//Requests & Responses
export type GetVisitorByEmailRequest = string

export type GetVisitorByEmailResponse =  Promise<CustomResponse<VisitorsWithSms | false>>;

export type CreateVisitorRequest = {
  id?: string
  name: string
  email: string | null
  phoneNumber?: string | null
  lastVisit?: Date | string
}

export type VisitorsWithSms = Visitors & {
  sms: Sms[]
}

export type CreateVisitorResponse = Promise<CustomResponse<Visitors | false>>



//SERVICES
export type CreateVisitorService = Prisma.VisitorsUncheckedCreateInput;
