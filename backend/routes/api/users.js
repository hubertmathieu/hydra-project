var express = require('express');
var router = express.Router();
var database = require('../../database');
const { verifyAuthentification } = require('../../auth/auth');

router.get('/secret', verifyAuthentification, (req,res) =>{
  res.send('Protected ressource');
});

router.get('/', function(req, res) {
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
