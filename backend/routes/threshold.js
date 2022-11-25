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
        try {
            const request = parseRequest(req.body);
            await thresholdBroker.updateThresholds(thresholds[0]._id, request.humidityMinThreshold1, request.humidityMaxThreshold1, request.humidityMinThreshold2, request.humidityMaxThreshold2, request.humidityMinThreshold3, request.humidityMaxThreshold3);
        } catch (e) {
            console.log(e);
        }
    }
});

function requestIsValid(request) {
    return !(fieldIsEmpty(request.humidityMinThreshold1) || fieldIsEmpty(request.humidityMaxThreshold1) || fieldIsEmpty(request.humidityMinThreshold2) || fieldIsEmpty(request.humidityMaxThreshold2) || fieldIsEmpty(request.humidityMinThreshold3) || fieldIsEmpty(request.humidityMaxThreshold3));
}

function fieldIsEmpty(field) {
    return field == null || field === '';
}

function parseRequest(request) {
    try {
        let requestObject = {};
        requestObject.humidityMinThreshold1 = parseInt(request.humidityMinThreshold1);
        requestObject.humidityMaxThreshold1 = parseInt(request.humidityMaxThreshold1);
        requestObject.humidityMinThreshold2 = parseInt(request.humidityMinThreshold2);
        requestObject.humidityMaxThreshold2 = parseInt(request.humidityMaxThreshold2);
        requestObject.humidityMinThreshold3 = parseInt(request.humidityMinThreshold3);
        requestObject.humidityMaxThreshold3 = parseInt(request.humidityMaxThreshold3);
        return requestObject;
    } catch (e) {
        return new Error("Cannot parse");
    }
}

module.exports = router;
