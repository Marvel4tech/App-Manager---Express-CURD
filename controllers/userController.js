const register = (req, res) => {
    res.status(200).json({ message: "Welcome to resgister page" })
}

const login = (req, res) => {
    res.status(200).json({ message: "Welcome to login page" })
}

module.exports = { register, login }