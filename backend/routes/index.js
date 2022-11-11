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
    let treshold = await thresholdBroker.findAll();
    let config = await configBroker.findConfig();
    let calvette1 = {};
    calvette1.status = "En fonction";
    calvette1.temperature = config[0].temperature1;
    calvette1.treshold = treshold[0].treshold1;
    calvette1.humidity = config[0].humidity1;

    let calvette2 = {};
    calvette2.status = "En fonction";
    calvette2.temperature = config[0].temperature2;
    calvette2.treshold = treshold[0].treshold2;
    calvette2.humidity = config[0].humidity2;
    console.log(calvette2)

    let calvette3 = {};
    calvette3.status = "En fonction";
    calvette3.temperature = config[0].temperature1;
    calvette3.treshold = treshold[0].treshold3;
    calvette3.humidity = config[0].humidity3;


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
