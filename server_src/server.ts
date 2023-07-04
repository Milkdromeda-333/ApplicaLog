import express, { Express } from 'express';
import Mongoose from "mongoose";
import morgan from 'morgan';
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app: Express = express();

// middleware

if (process.env.NODE_ENV === 'dev') {
    morgan('dev');
}

app.use(express.json());

// only start server if connecton to db was successful
function startServer() {
    if (!process.env.MONGO_URI) {
        throw new Error("No database detected.");
    }

    Mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server listening on port: ${PORT}`);
            })
        })
        .catch(err => console.log(err));
}
startServer();

