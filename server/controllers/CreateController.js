const db = require("../models/databaseModel");
const { hashCreatePassword, hashCreateCreditCard } = require('./queryFunctions/HashesCreate.js');
 
class CreateControllerBlueprint {
  async makeDonation(req, res, next) {
    // destructor request body 
    const { donations, members } = req.body;
    // test if request would like to add user
    if (members.user_name && members.password) {
      const { user_name, password } = members;
      const hashedPW = await hashCreatePassword(password);
      const inputUser = `INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING *`;
      // query DB passing in user_name and password as variables and storing in res.locals

      // const result = await db.query(inputUser, [user_name, hashedPW]);
      // console.log("result rows", result.rows)
      // (data => res.locals.user = data.rows).catch(err => next(err));
    }
    // post donation to DB
    const { nameInput, donationAmount, creditCard, phone, date, email } = donations;
    const inputDonation = "INSERT INTO donations(nameInput, donationAmount, creditCard, phone, date, email) VALUES ($1, $2, $3, $4, $5, $6)";
    next();
  }
}

const CreateController = new CreateControllerBlueprint();
const makeDonation = CreateController.makeDonation;

module.exports = {
  makeDonation,
  CreateController,
}