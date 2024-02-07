import { formatResponse } from "@/services/utilService/utils";
import { CreatePostRequest } from "@/types/posts/type";
import { baseUrl } from "../..";

/**
 * Client side function for request to api that creates a blog post
 * @param post - data for creating a blog post { title, content, published, authorId } 
 * @returns return response with result of api request
 */
export const createPost = (post: CreatePostRequest) => {
  return fetch(`${baseUrl}/api/posts/create-post`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Allow-Content-Type': 'application/json'
    }
  }).then(response => formatResponse(response));
}