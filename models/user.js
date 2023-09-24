const mongoose = require("mongoose");

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

userSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model("User", userSchema);