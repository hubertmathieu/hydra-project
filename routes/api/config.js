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
        var newConfig = {};
        newConfig.delay = req.body.delay || config.delay;
        newConfig.phDown = req.body.phDown || config.phDown;
        newConfig.maxPh = req.body.maxPh || config.maxPh;
        newConfig.minPh = req.body.minPh || config.minPh;
        newConfig.maxHumidity = req.body.maxHumidity || config.maxHumidity;
        newConfig.minHumidity = req.body.minHumidity || config.minHumidity;
        database.updateConfig(newConfig);
    });
});

module.exports = router;