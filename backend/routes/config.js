const express = require('express');
const router = express.Router();
const configBroker = require("../models/brokers/configBroker")

router.get('/', async function (req, res, next) {
    let config = await configBroker.findConfig();
    let formattedConfig = "{\"temperature1\":" + config[0].temperature1 + ",\"temperature2\":" + config[0].temperature2 + ",\"temperature3\":" + config[0].temperature3 + ",\"humidity1\":" + config[0].humidity1 + ",\"humidity2\":" + config[0].humidity2 + ",\"humidity3\":" + config[0].humidity3 + ",\"ph\":" + config[0].ph + ",\"waterLevel1\":"  + config[0].waterLevel1 + ",\"waterLevel2\":" + config[0].waterLevel2 + "}";
    res.send(formattedConfig);
});

router.post('/', async function (req) {
    const config = await configBroker.findConfig();
    await configBroker.updateConfig(config[0]._id, req.body);
});

module.exports = router;
