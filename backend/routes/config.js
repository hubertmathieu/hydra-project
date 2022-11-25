const express = require('express');
const router = express.Router();
const configBroker = require("../models/brokers/configBroker")

router.get('/', async function (req, res, next) {
    let config = await configBroker.findConfig();
    res.send(config[0]);
});

router.post('/', async function (req) {
    const config = await configBroker.findConfig();
    if (requestIsValid(req.body)) {
        await configBroker.updateConfig(config[0]._id, parseFloat(req.body.humidity1), parseFloat(req.body.humidity2), parseFloat(req.body.humidity3), parseFloat(req.body.temperature1), parseFloat(req.body.temperature2), parseFloat(req.body.temperature3));
    }
});

function requestIsValid(request) {
    return !(fieldIsEmpty(request.humidity1) || fieldIsEmpty(request.humidity2) || fieldIsEmpty(request.humidity3) || fieldIsEmpty(request.temperature1) || fieldIsEmpty(request.temperature2) || fieldIsEmpty(request.temperature3));
}

function fieldIsEmpty(field) {
    return field == null || field === '';
}

module.exports = router;
