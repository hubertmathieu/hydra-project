var express = require('express');
var router = express.Router();
const database = require('../database');

router.get('/', function (req, res, next) {
    database.findConfig((config) => {
        if (config.length === 0) {
            database.insertConfig( (config) => {
                res.send(config[0]);
            });
        } else {
            res.send(config[0]);
        }
    });
});

router.post('/', function(req, res) {
    database.findConfig((config) => {
        database.updateConfig(config[0]._id, req.body, function (err) {
            if (err) res.send({status: "error", title: "Erreur", message: "La modification n'a pas pu être complétée"});
            else res.send({status: "success", title: "Succès", message: "La modification a été complétée avec succès"})
        });
    });
});

module.exports = router;
