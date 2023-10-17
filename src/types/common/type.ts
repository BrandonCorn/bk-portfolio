import { ErrorResponse } from "../errors/type";

export type LoadingState = 'loading' | 'success' | 'error';

export type CustomResponse<T> = {
  success: true, data: T
} | {
  success: false, error: ErrorResponse
}