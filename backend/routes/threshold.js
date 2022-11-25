const express = require('express');
const router = express.Router();
const thresholdBroker = require("../models/brokers/thresholdBroker")

router.get('/', async function (req, res, next) {
    let thresholds = await thresholdBroker.findAll();
    res.send(thresholds[0]);
});

router.post('/', async function (req) {
    const thresholds = await thresholdBroker.findAll();
    if (requestIsValid(req.body)) {
        await thresholdBroker.updateThresholds(thresholds[0]._id, parseFloat(req.body.humidityMinThreshold1), parseFloat(req.body.humidityMaxThreshold1), parseFloat(req.body.humidityMinThreshold2), parseFloat(req.body.humidityMaxThreshold2), parseFloat(req.body.humidityMinThreshold3), parseFloat(req.body.humidityMaxThreshold3));
    }
});

function requestIsValid(request) {
    return !(fieldIsEmpty(request.humidityMinThreshold1) || fieldIsEmpty(request.humidityMaxThreshold1) || fieldIsEmpty(request.humidityMinThreshold2) || fieldIsEmpty(request.humidityMaxThreshold2) || fieldIsEmpty(request.humidityMinThreshold3) || fieldIsEmpty(request.humidityMaxThreshold3));
}

function fieldIsEmpty(field) {
    return field == null || field === '';
}

module.exports = router;
