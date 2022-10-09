//app.js
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongodb = require("./database/");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const { auth, requiresAuth } = require('express-openid-connect');
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

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};


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

// app.use(auth(config));

// app.get("/login", (req, res) => {
//   res.redirect(
//     `https://github.com/login/oauth/authorize?client_id=${process.env.clientID}`
//   )
// } )

// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });