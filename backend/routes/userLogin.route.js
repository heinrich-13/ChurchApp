const express = require('express')
const userLoginRoute = express.Router()

// User Login model
let userLoginModel = require('../models/UserLogin');

userLoginRoute.route('/viewUL').get((req, res) => {
  userLoginModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

 userLoginRoute.route('/createUL').post((req, res, next) => {
    userLoginModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
userLoginRoute.route('/editUL/:id').get((req, res) => {
    userLoginModel.findById(req.params.id, (error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 });
 
 // Update dailyVerse
 userLoginRoute.route('/updateUL/:id').post((req, res, next) => {
    userLoginModel.findByIdAndUpdate(req.params.id, {
     $set: req.body
   }, (error, data) => {
     if (error) {
       return next(error);
     } else {
       res.json(data)
       console.log('User Details successfully updated!')
     }
   })
 });
 // Delete dailyVerse
 userLoginRoute.route('/deleteUL/:id').delete((req, res, next) => {
    userLoginModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  });
  
  module.exports = userLoginRoute;