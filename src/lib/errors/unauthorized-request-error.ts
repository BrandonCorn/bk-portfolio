import { CustomError } from "./custom-abstract-error";

export class UnauthorizedRequestError extends CustomError {
    statusCode = 401;

    constructor() {
        super('not authorized');

        Object.setPrototypeOf(this, UnauthorizedRequestError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: 'Not Authorized'
            }
        ]
    }
}