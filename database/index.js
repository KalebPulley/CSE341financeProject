//the sode in this file is highly inspred by the work of Nathan Birch
const dotenv = require("dotenv");
//make envirment variable available
dotenv.config();
const { MongoClient } = require("mongodb");

//set varable for database
let database;


//initialize database
const initializeDatabase = (callback) => {
  if (database) {
    console.log("database is already running");
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

//get dataBase if it is initialized
const getDatabase = () => {
  if (!database) {
    throw Error("Database not initialized");
  }
  return database;
};

module.exports = {
  initializeDatabase,
  getDatabase,
};
