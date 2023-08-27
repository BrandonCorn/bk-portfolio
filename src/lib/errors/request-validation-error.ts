import { CustomError } from './custom-abstract-error';

export class RequestValidationError extends CustomError {
    // private readonly message = 'Invalid request';
    statusCode = 400;
    constructor(public message = 'Invalid request') {
        super(message);

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: this.message
            }
        ]
    }

}