const express = require("express")
const router = express.Router()

router.post("/register", (req, res) => {
    res.status(200).json({ message: "register new user" })
})

router.post("/login", (req, res) => {
    res.status(200).json({ message: "login user" })
})

router.get("/current", (req, res) => {
    res.status(200).json({ message: "current user information" })
})

module.exports = router;