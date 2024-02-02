
import { GetPostsByPublishDateRequest } from "@/types/posts/type";
import { formatResponse } from "@/services/utilService/utils";

export const getPostsByPublishDate = (data: GetPostsByPublishDateRequest) => {
  const { pageSize, skip, date } = data;

  return fetch(`/api/posts/get-posts?pageSize=${pageSize}&skip=${skip}&date${date}`, {
    method: 'GET',
    headers: {
      'Allow-Content-Type': 'application/json',
    }
  }).then(response => formatResponse(response));
}