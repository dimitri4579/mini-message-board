const { Router } = require("express");
const newMessageRouter = Router();
const newMessageController = require("../controllers/newMessageController");

newMessageRouter.get("/", newMessageController.createNewMessageGet);

newMessageRouter.post("/", newMessageController.createMessagePost);

module.exports = newMessageRouter;