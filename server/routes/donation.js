const express = require('express');
const donateRouter = express.Router();
const makeDonation = require('../controllers/CreateController.js')


donateRouter.post("/makeDonation", CreateController.makeDonation, (req, res) => {
  res.sendStatus(200);
});


module.exports = donateRouter;