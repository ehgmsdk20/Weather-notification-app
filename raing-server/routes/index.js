var express = require('express');
const { database } = require('../firebase/firebase');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  database.ref('board').set('test');
  res.render('index', { title: 'Express' });
});

module.exports = router;
