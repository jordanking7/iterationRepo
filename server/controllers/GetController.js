const db = require("../models/databaseModel");

class GetControllerBlueprint {
  async getDonations(err, req, res, next) {
    try {
      const allDonations = 'SELECT sum(amount) FROM donations';
      const result = await db.query(allDonations); //yields a number
      const donations = result.rows[0].sum;
      res.locals.donations = donations;
    } catch (err) {
      console.log(err);
    };
    // .then((data) => {
    //   res.locals.donations = data.rows[0].sum;
    //   console.log('this is res.locals:', res.locals.donations);
    //   return next()
    // })
    // .catch((err) => {
    //   next(err);
    // });
    next();
  };
}

const GetController = new GetControllerBlueprint();

const getDonations = GetController.getDonations;

module.exports = {
  getDonations,
  GetController
}


// dataBaseController.getDonations = (req, res, next) => {
//   const allDonations = 'SELECT sum(amount) FROM donations';
//   db.query(allDonations)
//     .then((data) => {
//       res.locals.donations = data.rows[0].sum;
//       console.log('this is res.locals:', res.locals.donations);
//       return next()
//     })
//     .catch((err) => {
//       next(err);
//     });
// };