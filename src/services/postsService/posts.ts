// import { Post } from "@prisma/client";
import { PostType } from "@/redux/slices/postSlice";
import prisma from "@/lib/prismaDb";
import { DatabaseConnectionError } from "@/lib/errors/database-connection-error";

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