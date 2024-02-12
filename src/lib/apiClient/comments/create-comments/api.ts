import { formatResponse } from "@/services/utilService/utils";
import { CreateCommentRequestData } from "@/types/comments/type";
import { CustomResponse } from "@/types/common/type";
import { Comment } from "@prisma/client";

/**
 * Client side function for request to api that creates a comment to a blog post
 * @param comment - Data required for creating a Comment in the database 
 * @param comment.content - The content of the authors comment, the comment itself
 * @param comment.authorEmail - Email of the author
 * @param comment.authorName - Name of the author
 * @param comment.postId - The id of the post being commented on
 * @returns return response with result of api request
 */
export const createComment = (comment: CreateCommentRequestData): Promise<CustomResponse<Comment>> => {
  return fetch(`/api/comments/create-comment`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Allow-Content-Type': 'application/json'
    }
  }).then(response => formatResponse(response));
}