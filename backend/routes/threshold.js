const express = require('express');
const router = express.Router();
const thresholdBroker = require("../models/brokers/thresholdBroker")

router.get('/', async function (req, res, next) {
    let thresholds = await thresholdBroker.findAll();
    let formattedThresholds = "{\"threshold1\":" + thresholds[0].threshold1 + ",\"threshold2\":" + thresholds[0].threshold2 + ",\"threshold3\":" + thresholds[0].threshold3 + ",\"humiditythreshold1\":" + thresholds[0].humiditythreshold1 + ",\"humiditythreshold2\":" + thresholds[0].humiditythreshold2 + ",\"humiditythreshold3\":" + thresholds[0].humiditythreshold3 + ",\"phThreshold\":" + thresholds[0].phThreshold + "}";
    res.send(formattedThresholds);
});

router.post('/', async function (req) {
    const thresholds = await thresholdBroker.findAll();
    await thresholdBroker.updateThresholds(thresholds[0]._id, req.body);
});

module.exports = router;
