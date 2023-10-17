const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    weeklyGoal: Number,
    metrics: {
        progress: Number,
        pipeline: {
            bookmarked: Number,
            applying: Number,
            applied: Number,
            interviewing: Number
        }
    }
});

/**
 * Returns a user object without a password for use of sending to the frontend
 * 
 * @returns object user object without the password field
 */
userSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

/**
 * Compares a password attempt to a user's password to varify if they are the same
 * 
 * @param  string  passwordAttempt the user's attempted password
 * @return boolean true if passwords match, false otherwose
 */
userSchema.methods.verifyPassword = async function (passwordAttempt) {
    const user = this.toObject();
    const isPasswordValid = await bcrypt.compare(passwordAttempt, user.password);
    return isPasswordValid;
};

module.exports = mongoose.model("User", userSchema);