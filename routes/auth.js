const express = require("express");
const router = express();
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
};

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "dev",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
};

router.post("/sign-up", async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email.toLowerCase() });

        if (user) {
            res.status(StatusCodes.UNAUTHORIZED);
            return next("User already exists!");
        }

        bcrypt.hash(password, 10)
            .then(hashedPassword => {
                const newUser = new User({ email, password: hashedPassword });

                newUser.save()
                    .then((savedUser) => {
                        const token = generateToken({ email, id: newUser.id });
                        res.status(StatusCodes.CREATED);
                        res.cookie("authentication-token", token, COOKIE_OPTIONS);
                        res.send(savedUser.withoutPassword());
                    })
                    .catch(err => next(err));
            })
            .catch(err => next(err));
    } catch (err) {
        return next(err);
    }
});


module.exports = router;