const asyncHandler = require("express-async-handler")

//@desc Register user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler (async (req, res) => {
    res.status(200).json({ message: "register new user" })
})

//@desc Login user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler (async (req, res) => {
    res.status(200).json({ message: "login user" })
})

//@desc current user information
//@route POST /api/users/current
//@access Private
const currentUser = asyncHandler (async (req, res) => {
    res.status(200).json({ message: "current user information" })
})

module.exports = {
    registerUser,
    loginUser,
    currentUser,
}