
import { GetPostsByPublishDateRequest } from "@/types/posts/type";
import { formatResponse } from "@/services/utilService/utils";
import { baseUrl } from "../..";

/**
 * Client side function for request to api to fetch blog posts by page and date
 * @param data information for querying blog posts: pageSize being how many to query, skip being how many to skip, and date being how they are ordered for optimization
 * @returns response with blog post data or error
 */
export const getPostsByPublishDate = (data: GetPostsByPublishDateRequest) => {
  const { pageSize, skip, date } = data;
  
  return fetch(`/api/posts/get-posts?pageSize=${pageSize}&skip=${skip}&date=${date}`, {
    method: 'GET',
    headers: {
      'Allow-Content-Type': 'application/json',
    }
  }).then(response => formatResponse(response));
}