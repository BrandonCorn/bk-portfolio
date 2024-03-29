import { CustomError } from './custom-abstract-error';

export class NotFoundError extends CustomError {
    code = 404;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [ 
            {
                message: 'Not found',
            }
        ]
    }
}