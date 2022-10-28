const express = require('express');
const router = express.Router();
const thresholdBroker = require("../models/brokers/thresholdBroker")

router.get('/', async function (req, res, next) {
    let thresholds = await thresholdBroker.findAll();
    console.log(thresholds);
    if (thresholds.length === 0) {
        await thresholdBroker.insertDefaultThresholds();
        thresholds = await thresholdBroker.findAll();
    }
    res.send(thresholds[0]);
});

router.post('/', async function (req) {
    const thresholds = await thresholdBroker.findAll();
    await thresholdBroker.updateThresholds(thresholds[0]._id, req.body);
});

module.exports = router;
