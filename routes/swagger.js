const routes = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

routes.use("/docs", swaggerUi.serve);
routes.get("/docs", swaggerUi.setup(swaggerDocument));

//export the module
module.exports = routes;