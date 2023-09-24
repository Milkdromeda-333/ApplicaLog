const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

// Middleware
const app = express();
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}
app.use(express.json());

app.use("/auth", require("./routes/auth"));

// TODO: IMPROVE ERROR HANDLING!
app.use((err, req, res, next) => {
    console.error(err);
    res.send({ errMsg: err });
});

function startServer() {
    if (!process.env.MONGO_URI) {
        throw new Error("No database url detected.");
    }

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server listening at this URL: http://localhost:${PORT}`);
            });
        })
        .catch(err => console.log(err));
}
startServer();

