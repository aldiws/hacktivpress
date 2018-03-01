var express = require('express');
var router = express.Router();
var user = require('../controllers/usersController');

/* GET users listing. */
router.get('/', user.getAll)
router.post('/login', user.login);
router.post('/register', user.register);

module.exports = router;
