const express = require('express');
const applicationRouter = express.Router();
const makeDonation = require('../controllers/CreateController.js')


applicationRouter.post("/createApplicationRequest", makeDonation, (req, res) => {
  res.sendStatus(200);
});

 
module.exports = applicationRouter;