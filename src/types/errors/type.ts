export type ErrorCodes = 400 | 401 | 403 | 404 | 500;

export type ErrorResponse = {
  code: ErrorCodes;
  message: string;
}