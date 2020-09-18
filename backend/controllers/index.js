const piecesList = require('../pieces');
const pageTitlePrefix = "Serre Aéroponique Flottante Connectée | ";

exports.getAccueil = (req, res, next) => {
    res.render("pages/index", {
        pageTitle: pageTitlePrefix + "Accueil",
        path: "/index"
    });
};

exports.getStatistiques = (req, res, next) => {
    res.render("pages/statistiques", {
        pageTitle: pageTitlePrefix + "Statistiques",
        path: "/statistiques",
    });
};

exports.getSerre = (req, res, next) => {
    res.render("pages/serre", {
        pageTitle: pageTitlePrefix + "Serre",
        piecesList: piecesList,
        path: "/serre"
    });
};

exports.getPropos = (req, res, next) => {
    res.render("pages/a-propos", {
        pageTitle: pageTitlePrefix + "À propos",
        path: "/a-propos"
    });
};