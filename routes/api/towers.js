var express = require('express');
var router = express.Router();
var database = require('../../database');

router.post('/', function(req, res, next){
    console.log(req.body);
    database.insertData(req.body);
    res.send(req.body);
});


router.get('/', (req, res) => {
    database.findAllTowers((data) => {
        res.send(data);
    });
});

router.get('/send', (req, res) => {
    const data = [{data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80], title: "Température", format : "ºC" },
        {data: [65.7, 64.6, 56.7, 67.54], title: "Humidité", format : "%" }];
    res.send(data);
});

router.get('/:towerId', (req, res) => {
    database.findTowerById(req.params.towerId, (data) => {
        res.send(data);
    });
});

router.get('/:towerId/lastInsert', (req, res) => {
    database.findLastInsertedTower(req.params.towerId, (data) => {
        res.send(data);
    });
});


module.exports = router;