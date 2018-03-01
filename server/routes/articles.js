var express = require('express');
var router = express.Router();
var article = require('../controllers/articlesController');
var {isLogin,authArticle} = require('../helpers/util');

router.get('/', article.getAll)
router.get('/author/:authorID',isLogin, article.getByAuthor)
router.get('/category/:category', article.getByCategory)
router.get('/:id', article.getOne)

router.post('/',isLogin, article.create)
router.put('/:id',isLogin, article.update)
router.delete('/:id',isLogin, article.remove)

module.exports = router;