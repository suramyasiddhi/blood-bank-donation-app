const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.bgCyan.black
    );
  } catch (error) {
    console.error(
      `MongoDB Connection Error: ${error.message}`.bgRed.white
    );
    process.exit(1); // Stop app if DB fails
  }
};

module.exports = connectDB;
