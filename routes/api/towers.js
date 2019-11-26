var express = require('express');
var router = express.Router();
var database = require('../../database');

router.post('/', function(req, res, next){
    /*let type=req.body.type;
    let id=req.body.id;
    let temperature=req.body.data.temperature;
    let humidity=req.body.data.humidity;
    let jsonTower={
        "type":type,
        "id":id,
        "data":{
            "temperature":temperature,
            "humidity":humidity
        }
    };
    console.log(jsonTower);
    database.insertData(jsonTower);
    console.log("Test");
    res.send(jsonTower);*/
    console.log(req.body);
    database.insertData(req.body);
    res.send(req.body);
});


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
    database.findTowerById(req.params.towerId, (data) => {
        res.send(data);
    });
});



module.exports = router;