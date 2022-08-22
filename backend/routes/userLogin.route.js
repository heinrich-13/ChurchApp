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
      res.json(data).send()
      console.log('User Details successfully updated!')
    }
  })
});
// Delete User Details
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
// Check if email exists
userLoginRoute.route('/checkEmail').post((req, res) => {
  userLoginModel.findOne({ email: req.body.email }, (error, data) => {
    if (error) {
      console.log("Error 1")
      return res.status(500).send()
    }
    if (!data) {
      return res.status(404).send();
    }
    return res.status(200).send();
  })
});
// Check if email and password match
// Busy working on this
userLoginRoute.route('/checkPassword').post((req, res) => {
  userLoginModel.find({ email: req.body.email, password: req.body.password }, (error, data) => {
    if (error) {
      console.log("Error 1")
      return res.status(500).send()
    }
    if (!data) {
      return res.status(404).send();
    }
    //let emailCheck = req.body.email
    //let passwordCheck = req.body.password
    return res.status(200).send();
  })
});

module.exports = userLoginRoute;