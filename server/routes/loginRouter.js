const express = require('express');
const loginRouter = express.Router();
const makeDonation = require('..')


loginRouter.post("/login", CreateController.makeDonation, (req, res) => {
  res.sendStatus(200);
})

 
module.exports = loginRouter;
