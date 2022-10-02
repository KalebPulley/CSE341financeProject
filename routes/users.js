const routes = require("express").Router();
const controller = require("../controllers/");

//validation
const validation = require('../middleware/validate')


routes.get("/", controller.usersReturn);
routes.get("/:ID", controller.userReturn);
routes.post("/", validation.saveUser, controller.userPost);
routes.put('/:ID', validation.saveUser, controller.userUpdate);
routes.delete('/:ID', controller.userDelete);

// routes.put("/:ID", controller.userUpdate);
// routes.delete("/:ID", controller.userDelete);

//export the module
module.exports = routes;