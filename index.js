const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const contactRoute = require("./routes/contactRoutes")

app.use(express.json())

app.use("/api/contacts", contactRoute)


const PORT = process.env.PORT || 3001

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`)
})