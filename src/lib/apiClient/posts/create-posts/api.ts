import { formatResponse } from "@/services/utilService/utils";
import { CreatePostRequest } from "@/types/posts/type";

/**
 * Client side function for request to api that creates a blog post
 * @param post - data for creating a blog post { title, content, published, authorId } 
 * @param post.title - The title of the blog post
 * @param post.content - The contents of the blog post
 * @param post.published - Whether the blog post is published or not
 * @param post.authorId - id of the author creating the blog post
 * @returns return response with result of api request
 */
export const createPost = (post: CreatePostRequest) => {
  return fetch(`/api/posts/create-post`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Allow-Content-Type': 'application/json'
    }
  }).then(response => formatResponse(response));
}