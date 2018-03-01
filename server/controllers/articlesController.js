var Article = require('../models/article')

var getAll = (req, res) => {
  Article.find({})
  .populate('author')
  .exec()
  .then(articles => res.send(articles))
  .catch(err => res.status(500).send(err))
}

var getOne = (req, res) => {
  Article.findById(req.params.id)
  .populate('author')
  .exec()
  .then(article => res.send(article))
  .catch(err => res.status(500).send(err))
}

var getByCategory = (req, res) => {
  Article.find({ category: req.params.category })
  .populate('author')
  .exec()
  .then(articles => res.send(articles))
  .catch(err => res.status(500).send(err))
}

var getByAuthor = (req, res) => {
  Article.find({ author: req.params.authorID })
  .then(articles => res.send(articles))
  .catch(err => res.status(500).send(err))
}

var create = (req, res) => {
  let article = new Article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.userID
  })
  article.save()
  .then(created => res.send(created))
  .catch(err => res.status(500).send(err))
}

var remove = (req, res) => {
  Article.findByIdAndRemove(req.params.id)
  .then(removed => res.send(removed))
  .catch(err => res.status(500).send(err))
}

var update = (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updated => res.send(updated))
  .catch(err => res.send(err))
}

module.exports = {
  getAll,
  getOne,
  getByAuthor,
  getByCategory,
  create,
  remove,
  update
}
