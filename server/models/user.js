var mongoose = require('mongoose')
var validate = require('mongoose-validator')
var Schema = mongoose.Schema

var usernameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 15],
    message: 'Username should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Username should contain alpha-numeric characters only',
  }),
]

var pwdValidator = [
  validate({
    validator: 'isLength',
    arguments: [5],
    message: 'Password minimum length should be {ARGS[0]}',
  })
]

var userSchema = new Schema({
  username: { type: String, required: true, validate: pwdValidator },  
  password: { type: String, required: true, validate: pwdValidator },    
}, {timestamps: true})

var User = mongoose.model('User', userSchema)

module.exports = User
