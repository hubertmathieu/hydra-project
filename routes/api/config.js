var express = require('express');
var router = express.Router();

var database = require('../../database');

router.get('/', function (req, res, next) {
    database.findDefaultConfig((config) => {
        res.send(config);
    });
});

router.post('/', function (req, res) {
    database.findDefaultConfig((config) => {
        database.updateConfig(config._id, req.body);
    });
});

module.exports = router;