import { PostType } from "@/redux/slices/postSlice/postSlice";
import prisma from "@/lib/prismaDb";
import { DatabaseConnectionError } from "@/lib/errors/database-connection-error";
import { CreatePostRequest } from "@/types/posts/type";

/**
 * Function to get all blog posts from a certain date, specifying how many posts to retrieve and how many to skip
 * @param pageSize - How many blog posts we want to query from the database
 * @param skip The number of blog posts to skip when retrieving them
 * @param date The most recent date we want to retrieve blog posts from
 * @returns returns a promise object with an array of the posts found, null, or an error
 */
export const getPostsByPublishDate = async (pageSize: number = 27, skip: number = 0, date: Date = new Date()): Promise<PostType[] | null> => {
  try{
    const posts = await prisma.post.findMany({
      take: pageSize,
      skip,
      where: {
        createdAt: {
          lt: date
        }
      }
    });
    return posts || null;
  }
  catch(error: any){
    if(error?.code === 'P2002'){
      return error;
    }
    throw new DatabaseConnectionError(error as string);
  }
}


/**
 * Function to create a blog post and save to the database
 * @param post - The blog post data
 * @param post.title - The title of the blog post
 * @param post.content - The contents of the blog post
 * @param post.published - Whether the blog post is published or not
 * @param post.authorId - id of the author creating the blog post
 * @returns 
 */
export const createPost = async ({title, content, published, authorId}: CreatePostRequest) => {
  try{
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId
      }
    });

    return post || null;
  }
  catch(error){
    throw new DatabaseConnectionError(error as string);
  }
}

/**
 * Deletes all blog posts by an author
 * @param authorId - id of author for whom we want to delete all blog posts
 * @returns 
 */
export const deleteAllPosts = async (authorId: string) => {
  try{
    return await prisma.post.deleteMany({
      where: {
        authorId
      }
    })
  }
  catch(error){
    throw new DatabaseConnectionError(error as string);
  }
}