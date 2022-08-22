var mongoose = require('mongoose')
var Schema = mongoose.Schema

let prayerRequestSchema = new Schema({
  date: {
    type: String
  },
  name: {
    type: String
  },
  request: {
    type: String
  }
},
  {
    collection: 'prayerRequests'
  })

module.exports = mongoose.model('PrayerRequest', prayerRequestSchema)