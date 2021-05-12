const EXPRESS = require('express');
const pingRouter = EXPRESS.Router();
const PingController = require("../controllers/ping.controller")

pingRouter.get("/", PingController.getPing)

module.exports = pingRouter


