export type ErrorCodes = 400 | 401 | 403 | 404 | 500 | number;

export type ErrorResponse = {
  status: ErrorCodes;
  statusText: string;
  message: string;
}