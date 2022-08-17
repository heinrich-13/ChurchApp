mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userLoginSchema = new Schema({
    date: {
      type: String
    },
    name: {
      type: String
    },
    surname: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  }, 
  {
    collection: 'userLogins'
  })

  module.exports = mongoose.model('UserLogin', userLoginSchema)