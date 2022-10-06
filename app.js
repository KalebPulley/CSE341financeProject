//app.js
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongodb = require("./database/");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
//make envirment variable available
dotenv.config();

app.use(bodyParser.json());
app.use("/", require("./routes"));

process.on("uncaughtException", (err, origin) => {
  console.log(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});

//initalize database and start the server
mongodb.initializeDatabase((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
});
