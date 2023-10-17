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
    httpOnly: true, // prevents reading of cookies using JavaScript
    secure: process.env.NODE_ENV !== "dev", // doesnt allow cookie to be sent through an unencrypted request over the "https" protocol
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    sameSite: "Lax" // protects api from cross site forgery attacks by enforcing that cookies can only be sent to sites of the same origin (domain and protocol), as well as not when the user is clicking a link to the site from another site and as a safe HTTP request (NOT POST) AND is a top level navigation (aka the domain changes) 
};

const COOKIE_KEY = "authentication-token";


/**
 * Sign's a user up for an account
 * 
 * @body username users username attempt
 * @body password users selected password
 * @return object user document with a jwt token or an error
 */
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
                        res.cookie(COOKIE_KEY, token, COOKIE_OPTIONS);
                        return res.send(savedUser.withoutPassword());
                    })
                    .catch(err => next(err));
            })
            .catch(err => next(err));
    } catch (err) {
        return next(err);
    }
});


/**
 * Processes a user's login attempt
 * 
 * @body username users username attempt
 * @body password users password attempt
 * @return object user document with a jwt token or an error
 */
router.post("/login", async (req, res, next) => {
    const { username, password } = req.body;

    if (!(username || password)) {
        return next("Username and password are required!");
    }

    try {
        const foundUser = await User.findOne({ username });

        if (!foundUser) {
            return next({
                message: "No user found.",
                statusCode: StatusCodes.BAD_REQUEST
            });
        } else {
            if (await foundUser.verifyPassword(password)) {
                res.status(StatusCodes.ACCEPTED);
                const token = generateToken({ username, id: foundUser._id });
                res.cookie(COOKIE_KEY, token, COOKIE_OPTIONS);
                return res.send(foundUser.withoutPassword());
            } else {
                res.status(StatusCodes.UNAUTHORIZED);
                return res.send({ errMessage: "Wrong credentials" });
            }
        }

    } catch (err) {
        return next(err);
    };
});

/**
 * Clears cookie of user's browser
 * 
 * @return void
 */
router.post("/logout", async (req, res, next) => {
    res.clearCookie(COOKIE_KEY);
    res.end();
});


module.exports = router;