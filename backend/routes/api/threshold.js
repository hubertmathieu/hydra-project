var express = require('express');
var router = express.Router();

var database = require('../../database');

router.get('/:serreId', function (req, res, next) {
    database.findDefaultThreshold(req.params.serreId, (threshold) => {
        res.send(threshold);
    });
});

router.post('/:serreId', function (req, res) {
    database.findDefaultThreshold(req.params.serreId, (threshold) => {
        database.updateThreshold(threshold._id, req.body, function (err, res) {
            if (err) res.send({status: "error"}); else res.send("You've sent : " + JSON.stringify(req.body));
        });
    });
    res.send("You've sent : " + JSON.stringify(req.body));
});

module.exports = router;