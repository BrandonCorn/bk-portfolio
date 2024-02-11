import prisma from "@/lib/prismaDb";
import { DatabaseConnectionError } from "@/lib/errors/database-connection-error";
import { CreateCommentRequestData } from "@/types/comments/type";


/**
 * Function to create a comment in the database
 * @param comment - Data required for creating a Comment in the database 
 * @param comment.content - The content of the authors comment, the comment itself
 * @param comment.authorEmail - Email of the author
 * @param comment.authorName - Name of the author
 * @param comment.postId - The id of the post being commented on
 * @returns 
 */
export const createComment = async ({content, authorEmail, authorName, postId}: CreateCommentRequestData) => {
  try{
    const comment = await prisma.comment.create({
      data: {
        content,
        authorEmail,
        postId,
        authorName,
      }
    });

    return comment || null;
  }
  catch(error){
    throw new DatabaseConnectionError(error as string);
  }
}

/**
 * Retrieve comments from database for given postIds
 * @param postIds Array of postId to retrieve comments for
 * @returns array of comments found
 */
export const getCommentByPostIds = async (postIds: number[]) => {
  try{
    const comments = await prisma.comment.findMany({
      where: {
        postId: {
          in: postIds
        }
      }
    });

    return comments || null;
  }
  catch(error){
    throw new DatabaseConnectionError(error as string);
  }
}

/**
 * Function to delete a specified comment in the database
 * @param id - id of the Comment to be deleted
 * @returns returns result of deleting a blog post comment
 */
export const deleteComment = async (id: number) => {
  try{
    return await prisma.comment.delete({
      where: {
        id
      }
    })
  }
  catch(error){
    throw new DatabaseConnectionError(error as string);
  }
}