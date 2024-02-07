import { Post } from "@prisma/client";
import { PostType } from "@/redux/slices/postSlice";
import prisma from "@/lib/prismaDb";
import { DatabaseConnectionError } from "@/lib/errors/database-connection-error";
import { CreatePostRequest } from "@/types/posts/type";

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