import express from 'express';
import Mongoose from "mongoose";
import morgan from 'morgan';
require('dotenv').config();
const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV !== 'production') {
    morgan('dev');
}

// Middleware

const app = express();
app.use(express.json());

function startServer() {
    if (!process.env.MONGO_URI) {
        throw new Error("No database detected.");
    }

    Mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server listening on port: ${PORT}`);
            });
        })
        .catch(err => console.log(err));
}
startServer();

