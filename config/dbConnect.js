const mongoose = require("mongoose");

const dbConnection = async () => {
   try {
    const connectDB = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database is connected : ", connectDB.connection.host, connectDB.connection.name)
   } catch (error) {
    console.log("db connection error")
    process.exit(1)
   }
}

module.exports = dbConnection;