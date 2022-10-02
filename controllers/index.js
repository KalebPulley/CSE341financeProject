const { response } = require("express");
const mongodb = require("../database/");
const ObjectId = require("mongodb").ObjectId;

//ID validator
function validateID(req, res) {
  if (!ObjectId.isValid(req.params.ID)) {
    res.status(400).json("Must use a valid id.");
  }
}
//return all transactions
const transactionsReturn = async (req, res) => {
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("transactions")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-type", "application/json");
    res.status(200).json(lists);
  });
};

//return one transaction
const transactionReturn = async (req, res) => {
  const transactionID = new ObjectId(req.params.ID);
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("transactions")
    .find({ _id: transactionID });
  result.toArray().then((lists) => {
    res.setHeader("Content-type", "application/json");
    res.status(200).json(lists);
  });
};

//create one transaction
const transactionPost = async (req, res) => {
  const transaction = {
    user_id: req.body.user_id,
    amount: req.body.amount,
    description: req.body.description,
    otherParty: req.body.otherParty,
    fund: req.body.fund,
  };
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("transactions")
    .insertOne(transaction);
  if (result.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "some error occurred while creaing the transaction."
      );
  }
};

//delete one user
const transactionDelete = async (req, res) => {
  validateID(req, res);
  const transactionID = new ObjectId(req.params.ID);
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("transactions")
    .deleteOne({ _id: transactionID });
  if (result.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "somthing went wrong while delteing the transaction."
      );
  }
  // res.setHeader('Content-type', 'application/json');
  // res.status(200).send(result);
};

//create one user
const transactionUpdate = async (req, res) => {
  validateID(req, res);
  // console.log( req.body);
  // const uriBody = JSON.parse(req.body);
  const transactionID = new ObjectId(req.params.ID);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userLevel: req.body.userLevel,
    role: req.body.role,
    department: req.body.department,
    transactionCount: req.body.transactionCount,
    email: req.body.email,
  };
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("transactions")
    .updateOne({ _id: transactionID }, { $set: user });
  if (result.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while creaing the user.");
  }
};

//return all users
const usersReturn = async (req, res) => {
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("users")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-type", "application/json");
    res.status(200).json(lists);
  });
};

//return one user
const userReturn = async (req, res) => {
  const userID = new ObjectId(req.params.ID);
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("users")
    .find({ _id: userID });
  result.toArray().then((lists) => {
    res.setHeader("Content-type", "application/json");
    res.status(200).json(lists);
  });
  // res.setHeader('Content-type', 'application/json');
  // res.status(200).send(result);
};

//create one user
const userPost = async (req, res) => {
  // console.log( req.body);
  // const uriBody = JSON.parse(req.body);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userLevel: req.body.userLevel,
    role: req.body.role,
    department: req.body.department,
    transactionCount: req.body.transactionCount,
    email: req.body.email,
  };
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("users")
    .insertOne(user);
  if (result.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while creaing the user.");
  }
};

//delete one user
const userDelete = async (req, res) => {
  validateID(req, res);
  const userID = new ObjectId(req.params.ID);
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("users")
    .deleteOne({ _id: userID });
  if (result.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "somthing went wrong while delteing the user.");
  }
  // res.setHeader('Content-type', 'application/json');
  // res.status(200).send(result);
};

//create one user
const userUpdate = async (req, res) => {
  validateID(req, res);
  // console.log( req.body);
  // const uriBody = JSON.parse(req.body);
  const userID = new ObjectId(req.params.ID);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userLevel: req.body.userLevel,
    role: req.body.role,
    department: req.body.department,
    transactionCount: req.body.transactionCount,
    email: req.body.email,
  };
  const result = await mongodb
    .getDatabase()
    .db("financeProject")
    .collection("users")
    .updateOne({ _id: userID }, { $set: user });
  if (result.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "some error occurred while creaing the user.");
  }
};

module.exports = {
  transactionsReturn,
  transactionReturn,
  transactionPost,
  transactionDelete,
  transactionUpdate,
  usersReturn,
  userReturn,
  userPost,
  userDelete,
  userUpdate,
};
