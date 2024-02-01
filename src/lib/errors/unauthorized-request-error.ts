import { CustomError } from "./custom-abstract-error";

export class UnauthorizedRequestError extends CustomError {
    code = 401;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, UnauthorizedRequestError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: this.message
            }
        ]
    }
}