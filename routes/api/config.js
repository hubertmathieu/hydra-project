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
        console.log(req.body);
        console.log(config);
        database.updateConfig(config._id, req.body, function (err) {
            if (err) res.send({status: "error", title: "Erreur", message: "La modifcation n'a pas pu être complétée"});
            else res.send({status: "success", title: "Succès", message: "La modifcation a été complétée avec succès"})
        });
    });
});

module.exports = router;