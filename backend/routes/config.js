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
        try {
            const request = parseRequest(req.body);
            await configBroker.updateConfig(config[0]._id, request.humidity1, request.humidity2, request.humidity3, request.temperature1, request.temperature2, request.temperature3);
        } catch (e) {
            console.log(e);
        }
    }
});

function requestIsValid(request) {
    return !(fieldIsEmpty(request.humidity1) || fieldIsEmpty(request.humidity2) || fieldIsEmpty(request.humidity3) || fieldIsEmpty(request.temperature1) || fieldIsEmpty(request.temperature2) || fieldIsEmpty(request.temperature3));
}

function fieldIsEmpty(field) {
    return field == null || field === '';
}

function parseRequest(request) {
    try {
        let requestObject = {};
        requestObject.humidity1 = parseInt(request.humidity1);
        requestObject.humidity2 = parseInt(request.humidity2);
        requestObject.humidity3 = parseInt(request.humidity3);
        requestObject.temperature1 = parseInt(request.temperature1);
        requestObject.temperature2 = parseInt(request.temperature2);
        requestObject.temperature3 = parseInt(request.temperature3);
        return requestObject;
    } catch (e) {
        return new Error("Cannot parse");
    }
}

module.exports = router;
