const routes = require("express").Router();
const { requiresAuth } = require('express-openid-connect');
routes.use("/", require("./swagger"));
routes.use("/users", requiresAuth(), require("./users"));
routes.use("/transactions", require("./transactions"));
//export the module
module.exports = routes;
