var express = require('express');
var router = express.Router();

var database = require('../../database');

router.get('/', function(req, res, next) {
    database.findAllGreenhouses((data) => {
        res.send(data);
    });
});

router.get('/:greenhouseId', (req, res) => {
    database.findGreenhouseById(req.params.greenhouseId, (data) => {
        res.send(data);
    });
});

module.exports = router;