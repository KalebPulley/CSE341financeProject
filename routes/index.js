const routes = require("express").Router();
routes.use("/", require("./swagger"));
routes.use("/users", require("./users"));
routes.use("/transactions", require("./transactions"));
//export the module
module.exports = routes;
