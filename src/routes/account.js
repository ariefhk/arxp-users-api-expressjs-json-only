const express = require("express");
const accountRoutes = express.Router();
const account = require("../controller/account.js");

accountRoutes.get("/", account.getData);
accountRoutes.post("/", account.postData);
accountRoutes.delete("/:id", account.deleteData);
accountRoutes.patch("/:id", account.updateData);
accountRoutes.get("/search/:account", account.searchData);

module.exports = accountRoutes;
