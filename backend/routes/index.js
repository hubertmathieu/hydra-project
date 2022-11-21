const express = require('express');
const router = express.Router();
const piecesList = require('../pieces');
const thresholdBroker = require('../models/brokers/thresholdBroker');
const configBroker = require('../models/brokers/configBroker');
const pageTitlePrefix = "Serre Aéroponique Flottante Connectée | ";

router.get('/', function (req, res) {
    res.render("pages/index", {
        pageTitle: pageTitlePrefix + "Accueil",
        path: "/index"
    });
});

router.get('/statistiques', async function (req, res) {
    let threshold = await thresholdBroker.findAll();
    let config = await configBroker.findConfig();
    let calvette1 = {};
    calvette1.status = config[0].humidity1 < threshold[0].humidityMinThreshold1 ? "En Fonction" : "Hors d'usage";
    calvette1.temperature = config[0].temperature1 == 999 ? 0 : config[0].temperature1;
    calvette1.minThreshold = threshold[0].humidityMinThreshold1 == 999 ? 0 : threshold[0].humidityMinThreshold1;
    calvette1.maxThreshold = threshold[0].humidityMaxThreshold1 == 999 ? 0 : threshold[0].humidityMaxThreshold1;
    calvette1.humidity = config[0].humidity1 == 999 ? 0 : config[0].humidity1;

    let calvette2 = {};
    calvette2.status = config[0].humidity2 < threshold[0].humidityMinThreshold2 ? "En Fonction" : "Hors d'usage";
    calvette2.temperature = config[0].temperature2 == 999 ? 0 : config[0].temperature2;
    calvette2.minThreshold = threshold[0].humidityMinThreshold2 == 999 ? 0 : threshold[0].humidityMinThreshold2;
    calvette2.maxThreshold = threshold[0].humidityMaxThreshold2 == 999 ? 0 : threshold[0].humidityMaxThreshold2;
    calvette2.humidity = config[0].humidity2 == 999 ? 0 : config[0].humidity2;

    let calvette3 = {};
    calvette3.status = config[0].humidity3 < threshold[0].humidityMinThreshold3 ? "En Fonction" : "Hors d'usage";
    calvette3.temperature = config[0].temperature1 == 999 ? 0 : config[0].temperature1;
    calvette3.minThreshold = threshold[0].humidityMinThreshold3 == 999 ? 0 : threshold[0].humidityMinThreshold3;
    calvette3.maxThreshold = threshold[0].humidityMaxThreshold3 == 999 ? 0 : threshold[0].humidityMaxThreshold3;
    calvette3.humidity = config[0].humidity3 == 999 ? 0 : config[0].humidity3;

    res.render("pages/statistiques", {
        pageTitle: pageTitlePrefix + "Statistiques",
        calvette1: calvette1,
        calvette2: calvette2,
        calvette3: calvette3,
        path: "/statistiques",
    });
});

router.get('/serre', function (req, res) {
    res.render("pages/serre", {
        pageTitle: pageTitlePrefix + "Serre",
        pieces: piecesList,
        path: "/serre"
    });
});

router.get('/a-propos', function (req, res) {
    res.render("pages/a-propos", {
        pageTitle: pageTitlePrefix + "À propos",
        path: "/a-propos"
    });
});

module.exports = router;
