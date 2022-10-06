const validator = require("../helpers/validate");

const saveUser = (req, res, next) => {
  const validationRule = {
    firstName: "required|string",
    lastName: "required|string",
    userLevel: "required|string",
    role: "required|string",
    department: "required|string",
    transactionCount: "required|string",
    email: "required|email",
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

const saveTransaction = (req, res, next) => {
  const validationRule = {
    user_id: "required|string",
    amount: "required|string",
    description: "required|string",
    otherParty: "required|string",
    fund: "required|string",
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveUser,
  saveTransaction,
};
