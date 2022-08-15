const express = require('express');
const prayerRequestRoute = express.Router();

// Prayer Request Model
let prayerRequestModel = require('../models/PrayerRequest');

prayerRequestRoute.route('/viewPR').get((req, res) => {
    prayerRequestModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 prayerRequestRoute.route('/create-prayerRequest').post((req, res, next) => {
    prayerRequestModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

prayerRequestRoute.route('/edit-PrayerRequest/:id').get((req, res) => {
    prayerRequestModel.findById(req.params.id, (error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 
 // Update PrayerRequest
 prayerRequestRoute.route('/update-PrayerRequest/:id').post((req, res, next) => {
    prayerRequestModel.findByIdAndUpdate(req.params.id, {
     $set: req.body
   }, (error, data) => {
     if (error) {
       return next(error);
     } else {
       res.json(data)
       console.log('Prayer request successfully updated!')
     }
   })
 })

 // Delete PrayerRequest
 prayerRequestRoute.route('/delete-PrayerRequest/:id').delete((req, res, next) => {
    prayerRequestModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
  module.exports = prayerRequestRoute;