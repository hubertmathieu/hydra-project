var express = require('express');
var router = express.Router();

var database = require('../../database');

router.get('/', function (req, res, next) {
    database.findDefaultThreshold((threshold) => {
        res.send(threshold);
    });
});

router.post('/', function (req, res) {
    database.findDefaultThreshold((threshold) => {
        console.log(req.body);
        console.log(threshold);
        database.updateThreshold(threshold._id, req.body);
    });
});

module.exports = router;