const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dailyVerseSchema = new Schema({
  date: {
    type: String
  },
  verse: {
    type: String
  },
  head: {
    type: String
  },
  body: {
    type: String
  }
},
  {
    collection: 'dailyVerses'
  })

module.exports = mongoose.model('DailyVerse', dailyVerseSchema)