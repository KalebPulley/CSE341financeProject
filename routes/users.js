const routes = require("express").Router();
const controller = require("../controllers/");


routes.get("/", controller.usersReturn);
routes.get("/:ID", controller.userReturn);
routes.post("/", controller.userPost);

// routes.put("/:ID", controller.userUpdate);
// routes.delete("/:ID", controller.userDelete);

//export the module
module.exports = routes;