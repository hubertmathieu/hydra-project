const express = require('express');
const router = express.Router();
const configBroker = require("../models/brokers/configBroker")

router.get('/', async function (req, res, next) {
    let config = await configBroker.findConfig();
    if (config.length === 0) {
        await configBroker.insertDefaultConfig();
        config = await configBroker.findConfig();
    }
    res.send(config[0]);
});

router.post('/', async function (req) {
    const config = await configBroker.findConfig();
    await configBroker.updateConfig(config[0]._id, req.body);
});

module.exports = router;
