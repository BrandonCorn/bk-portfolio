import { GetVisitorByEmailRequest, GetVisitorByEmailResponse } from "@/types/visitors/type";
import { formatResponse } from "@/services/utilService/utils";

/**
 * Find a visitor by their email address
 * @param {GetVisitorByEmailRequest} email 
 * @returns {GetVisitorByEmailResponse}
 */
export const getVisitorByEmail = (email: GetVisitorByEmailRequest): GetVisitorByEmailResponse => {
  return fetch(`/api/visitors/get-visitor`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Allow-Content-Type": "application/json",
    },
  }).then(response => formatResponse(response))
}