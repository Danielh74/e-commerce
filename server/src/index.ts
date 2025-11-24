import express, { NextFunction, Request, Response } from "express";
import ExpressError from './utils/ExpressError';
import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

// Send a 404 error for all unmatched routes with the message 'Page Not Found'
app.all(/(.*)/, (req: Request, res: Response, next: NextFunction) => {
    next(new ExpressError({ statusCode: 404, message: 'Route Not Found' }));
});

// Error middleware that send a response with the status code and error message
app.use((err: ExpressError, req: Request, res: Response, next: NextFunction) => {
    const { statusCode = 500 } = err; //statusCode defaults to 500
    if (!err.message)
        err.message = 'Something went wrong';
    res.status(statusCode).send({ error: err })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
