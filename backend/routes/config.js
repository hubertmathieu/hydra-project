const express = require('express');
const router = express.Router();
const configBroker = require("../models/brokers/configBroker")

router.get('/', async function (req, res, next) {
    let config = await configBroker.findConfig();
    res.send(config[0]);
});

router.post('/', async function (req) {
    console.log(req.body)
    //const json = JSON.parse(req.body);
    //console.log(json)
    //const config = await configBroker.findConfig();
    //await configBroker.updateConfig(config[0]._id, json);
});

module.exports = router;
