var mongoose = require('mongoose')
var validate = require('mongoose-validator')
var Schema = mongoose.Schema

var articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article