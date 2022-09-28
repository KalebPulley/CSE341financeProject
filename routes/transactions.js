const routes = require("express").Router();
const controller = require("../controllers/");

routes.get("/", controller.transactionsReturn);
routes.get("/:ID", controller.transactionReturn);
routes.post("/", controller.transactionPost);

// routes.put("/:ID", controller.transactionUpdate);
// routes.delete("/:ID", controller.transactionDelete);

//export the module
module.exports = routes;