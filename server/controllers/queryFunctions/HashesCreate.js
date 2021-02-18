const bcrypt = require('bcrypt');

const saltRounds = 10;
class HashesCreateBlueprint {
  async hashCreatePassword(password) {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log("🚀 ~ file: HashesCreate.js ~ line 11 ~ HashesCreateBlueprint ~ hashCreatePassword ~ password", hash)
    return hash;
  };

  async hashCreateCreditCard(creditCard) {
    const hash = await bcrypt.hash(creditCard, saltRounds);
    console.log("🚀 ~ file: HashesCreate.js ~ line 17 ~ HashesCreateBlueprint ~ hashCreateCreditCard ~ credit card", hash)
    return hash;
  }
}
const HashCreate = new HashesCreateBlueprint();

const hashCreateCreditCard = HashCreate.hashCreateCreditCard;
const hashCreatePassword = HashCreate.hashCreatePassword;

module.exports = {
  hashCreatePassword,
  hashCreateCreditCard,
}