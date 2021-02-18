const express = require('express');
const editAccountRouter = express.Router();
const makeDonation = require('../controllers/CreateController.js')


editAccountRouter.put("/changeUsername", CreateController.makeDonation, (req, res) => {
  res.sendStatus(200);
});
editAccountRouter.put("/changePassword", CreateController.makeDonation, (req, res) => {
  res.sendStatus(200);
});


module.exports = editAccountRouter;