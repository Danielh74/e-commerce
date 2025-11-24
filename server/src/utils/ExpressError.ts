interface prop {
    statusCode: number,
    message: string
};

export default class ExpressError extends Error {
    statusCode: number;
    status: string;
    constructor({ statusCode, message }: prop) {
        super();
        this.statusCode = statusCode;
        this.status = "fail";
        this.message = message;
    }
};