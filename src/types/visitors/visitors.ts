import { Prisma } from "@prisma/client";

//ROUTES
export type GetVisitorByEmailRoute = {
  email: string;
}

export type CreateVisitorRoute = {
  id?: string
  name?: string
  email?: string | null
  phoneNumber?: string | null
  visitCount: number
  lastVisit?: Date | string
  hasSentSms?: boolean | null
  sentSmsCount?: number | null
}


//SERVICES
export type CreateVisitorService = Prisma.VisitorsUncheckedCreateInput;
