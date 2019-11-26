var express = require('express');
var router = express.Router();
var database = require('../../database');

router.get('/', function(req, res, next) {
  database.findAllUsers((data) => {
    res.send(data);
  });
});

router.get('/:userId', (req, res) => {
  database.findUserById(req.params.userId, (data) => {
    res.send(data);
  });
});

module.exports = router;
