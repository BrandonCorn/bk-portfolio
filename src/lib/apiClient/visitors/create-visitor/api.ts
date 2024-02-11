import { CreateVisitorRequest, CreateVisitorResponse } from "@/types/visitors/type";
import { formatResponse } from "@/services/utilService/utils";

/**
 * Create a visitor in the database
 * @param {CreateVisitorRequest} visitor 
 * @returns {CreateVisitorResponse} 
 */
export const createVisitor = (visitor: CreateVisitorRequest): CreateVisitorResponse => {
  return fetch(`/api/visitors/create-visitor`, {
    body: JSON.stringify(visitor),
    method: "POST",
    headers: {
      "Allow-Content-Type": "application/json",
    },
  }).then((response) => formatResponse(response));
}