var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Article = require('../models/article');

module.exports = {

  isLogin: (req, res, next) => {
    console.log('req : ', req);
    var token = ''
    if (req.headers.token) {
      token = req.headers.token;
    } else if (req.body.token) {
      token = req.body.token
    }
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(403).json({
          mesaage: 'token not verify'
        })
      } else {
        console.log(JSON.stringify(decoded));
        // req.username = decoded.username
        req.decoded = decoded
        req.userID = decoded.userID
        next()
      }
    })
  },

  authArticle: (req, res, next) => {
    let token = req.headers.token
    if (!token) {
      res.status(403).send(`please logged in first`)
    }
    let decode = jwt.verify(token, 'secret')
    if (!decode) {
      res.send(`wrong token`)
    } else {
      Article.findById(req.params.id)
        .populate('author')
        .then(article => {
          if (article.author.username === decode.username) {
            next()
          } else {
            res.send(`its not yours`)
          }
        })
    }
  },
}