const express = require('express');
const router = express.Router();
const piecesList = require('../pieces');
const pageTitlePrefix = "Serre Aéroponique Flottante Connectée | ";

router.get('/', function (req, res) {
    res.render("pages/index", {
        pageTitle: pageTitlePrefix + "Accueil",
        path: "/index"
    });
});

router.get('/statistiques', function (req, res) {
    res.render("pages/statistiques", {
        pageTitle: pageTitlePrefix + "Statistiques",
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
