import { formatResponse } from "@/services/utilService/utils";
import { CustomResponse } from "@/types/common/type";
import { Comment } from "@prisma/client";

/**
 * Request to retreive all comments for the given postIds
 * @param postIds - Array of postIds
 * @returns Array of comments for the given postIds
 */
export const getCommentsByPostIds = (postIds: any): Promise<CustomResponse<Comment[]>> => {
  
  return fetch(`/api/comments/get-comments`, {
    method: 'POST',
    body: JSON.stringify(postIds),
    headers: {
      'Allow-Content-Type': 'application/json',
    }
  }).then(response => formatResponse(response));
}