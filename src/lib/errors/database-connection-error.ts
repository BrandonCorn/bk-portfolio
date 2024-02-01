import { CustomError } from "./custom-abstract-error";

export class DatabaseConnectionError extends CustomError {
    code = 500;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.message,
            }
        ]
    }
}