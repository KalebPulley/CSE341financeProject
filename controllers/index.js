const { response } = require('express');
const mongodb = require('../database/');
const ObjectId = require('mongodb').ObjectId;

//return all transactions
const transactionsReturn = async (req, res) => {
    const result = await mongodb.getDatabase().db('financeProject').collection('transactions').find();
    result.toArray().then((lists) =>{
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(lists);
    });
}

//return one transaction
const transactionReturn = async (req, res) => {
    const transactionID = new ObjectId(req.params.ID);
    const result = await mongodb.getDatabase().db('financeProject').collection('transactions').find({_id: transactionID});
    result.toArray().then((lists) =>{
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(lists);
    });
}

//create one transaction
const transactionPost = async (req, res) => {
    const transaction = {
        user_id: req.body.user_id,
        amount: req.body.amount,
        description: req.body.description,
        otherParty: req.body.otherParty,
        fund: req.body.fund
    };
    const result = await mongodb.getDatabase().db('financeProject').collection('transactions').insertOne(transaction);
   if (result.acknowledged){
    res.status(201).json(response);
   } else {
    res.status(500).json(response.error || "some error occurred while creaing the transaction.");
   }
}

//return all users
const usersReturn = async (req, res) => {
    const result = await mongodb.getDatabase().db('financeProject').collection('users').find();
    result.toArray().then((lists) =>{
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(lists);
    });
}

//return one user
const userReturn = async (req, res) => {
    const userID = new ObjectId(req.params.ID);
    const result = await mongodb.getDatabase().db('financeProject').collection('users').find({_id: userID});
    result.toArray().then((lists) =>{
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(lists);
    });
    // res.setHeader('Content-type', 'application/json');
    // res.status(200).send(result);
}

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
        email: req.body.email
    };
    const result = await mongodb.getDatabase().db('financeProject').collection('users').insertOne(user);
   if (result.acknowledged){
    res.status(201).json(response);
   } else {
    res.status(500).json(response.error || "some error occurred while creaing the user.");
   }
}




module.exports = {
transactionsReturn,
transactionReturn,
transactionPost,
usersReturn,
userReturn,
userPost,
}