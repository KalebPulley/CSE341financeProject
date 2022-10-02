const routes = require("express").Router();
const controller = require("../controllers/");

//validation
const validation = require('../middleware/validate')

routes.get("/", controller.transactionsReturn);
routes.get("/:ID", controller.transactionReturn);
routes.post("/", validation.saveTransaction, controller.transactionPost);
routes.put('/:ID', validation.saveTransaction, controller.transactionUpdate);
routes.delete('/:ID', controller.transactionDelete);

// routes.put("/:ID", controller.transactionUpdate);
// routes.delete("/:ID", controller.transactionDelete);

//export the module
module.exports = routes;