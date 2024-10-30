const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please add the username"],
        unique: true,
    },
    email: {
        type: String,
        require: [true, "Please add the email"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Please add the password"],
    }
}, {
    thismestamp: true,
})

module.exports = mongoose.model("User", userSchema)