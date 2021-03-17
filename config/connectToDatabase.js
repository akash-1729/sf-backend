const mongoose = require("mongoose");
const config = require("config");

//var url = "mongodb://localhost:27017/ELS";
const url = process.env.ATLAS;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected To Database!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
