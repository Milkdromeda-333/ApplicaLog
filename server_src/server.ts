import express, { Express } from 'express';
import morgan from 'morgan';
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app: Express = express();

// middleware

if (process.env.NODE_ENV === 'dev') {
    morgan('dev');
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hullo");
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})
