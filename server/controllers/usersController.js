var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

var getAll = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => res.status(500).send(err))
}

var register = (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, salt);
  let user = new User({
    username: req.body.username,
    password: hash
  })
  user.save()
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
}

var login = (req, res) => {
    User.findOne({
        username: req.body.username
      })
      .then(user => {
        console.log(user);
        if (!user) {
          res.status(401).json({
            success: false,
            message: 'Authentication failed. User not found.'
          })
        } else if (user) {
          let token = jwt.sign({
            username: user.username,
            userID: user._id
          }, 'secret', {
            expiresIn: '1h'
          })
          if (bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).json({
              success: true,
              message: 'Authentication success.',
              token: token,
              data: user
            })
          } else {
            res.status(401).json({
              success: false,
              message: 'Authentication failed. Wrong password.'
            })
          }
        }
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  }

  module.exports = {
    login,
    register,
    getAll
  }