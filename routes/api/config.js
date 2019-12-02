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
        database.updateConfig(newConfig);
    });
});

router.get('/threshold', function (req, res, next) {
    database.findThreshold((thresholds) => {
        res.send(thresholds);
    });
});

router.post('/threshold', function (req, res) {
    database.findDefaultConfig((threshold) => {
        var newThreshold = {};
        newThreshold.humidity = req.body.humidity || threshold.humidity;
        newThreshold.ph = req.body.ph || threshold.ph;
        database.updateConfig(newThreshold);
    });
});

module.exports = router;