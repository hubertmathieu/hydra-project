var express = require('express');
var router = express.Router();
var database = require('../../database');

let towers = {
    1: {
        id: '1',
        type: 'tower',
        name: 'tower 1',
        data: {
            temperature: '36C',
            humidity: '21%',
            lastSpray: '11/11/2019 - 21:33:41',
            nextSpray: '11/11/2019 - 21:38:41'
        }
    },
    2: {
        id: '2',
        type: 'tower',
        name: 'tower 1',
        data: {
            temperature: '36C',
            humidity: '346456456',
            lastSpray: '11/11/2019 - 21:33:41',
            nextSpray: '11/11/2019 - 21:38:41'
        }
    }
};


router.get('/', (req, res) => {
    database.findAllTowers((data) => {
        res.send(data);
    });
});

router.post('/test', (req, res) => {
    let name=req.body.name;
    let message=req.body.message;
    console.log("name = "+name+", message is "+message);
    res.send("it worked")
});

router.get('/send', (req, res) => {
    const data = [{data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80], title: "Température", format : "ºC" },
        {data: [65.7, 64.6, 56.7, 67.54], title: "Humidité", format : "%" }];
    res.send(data);
});

router.get('/:towerId', (req, res) => {
    return res.send(towers[req.params.towerId]);
});

module.exports = router;