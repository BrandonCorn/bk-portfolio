import { Post } from "@prisma/client";

export type GetPostsByPublishDateRequest = {
  pageSize: number,
  skip: number;
  date: Date,
}

export type CreatePostRequest = Pick<Post,'title' | 'content' | 'published' | 'authorId'> 