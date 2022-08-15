const express = require('express');
const dailyVerseRoute = express.Router();

// Daily Verse model
let dailyVerseModel = require('../models/DailyVerse');

dailyVerseRoute.route('/').get((req, res) => {
    dailyVerseModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 dailyVerseRoute.route('/create-dailyVerse').post((req, res, next) => {
    dailyVerseModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
dailyVerseRoute.route('/edit-dailyVerse/:id').get((req, res) => {
    dailyVerseModel.findById(req.params.id, (error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 
 // Update dailyVerse
 dailyVerseRoute.route('/update-dailyVerse/:id').post((req, res, next) => {
    dailyVerseModel.findByIdAndUpdate(req.params.id, {
     $set: req.body
   }, (error, data) => {
     if (error) {
       return next(error);
     } else {
       res.json(data)
       console.log('Daily verse successfully updated!')
     }
   })
 })
 // Delete dailyVerse
 dailyVerseRoute.route('/delete-dailyVerse/:id').delete((req, res, next) => {
    dailyVerseModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
  module.exports = dailyVerseRoute;