const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const contactRoute = require("./routes/contactRoutes")
const userRoute = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorHandler")
const dbConnect = require("./config/dbConnect")

dbConnect()

app.use(express.json())

app.use("/api/contacts", contactRoute)
app.use("/api/users", userRoute)
app.use(errorHandler)


const PORT = process.env.PORT || 3001

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`)
})