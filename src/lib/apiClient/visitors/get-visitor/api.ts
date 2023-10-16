import { BadRequestError } from "@/lib/errors/bad-request-error";
import { GetVisitorByEmailRequest, GetVisitorByEmailResponse } from "@/types/visitors/type";


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
  }).then((response) => {
    if (response.ok) return response.json();
    else {
      throw new BadRequestError(`${response}`)
    }
  })
}