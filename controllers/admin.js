const pageTitlePrefix = "Serre Aéroponique Flottante Connectée | ";

exports.getLogin = (req, res, next) => {
    res.render("admin/login", {
        pageTitle: pageTitlePrefix + "Connexion",
        path: "/login"
    });
};

exports.getIndex = (req, res, next) => {
    res.render("admin/index", {
        pageTitle: pageTitlePrefix + "Administration",
        path: "/"
    });
};

exports.getGraphics = (req, res, next) => {
    res.render("admin/graphiques", {
        pageTitle: pageTitlePrefix + "Graphiques",
        path: "/graphiques"
    });
};

exports.getConfig = (req, res, next) => {
    res.render("admin/config", {
        pageTitle: pageTitlePrefix + "Configuration",
        path: "/config"
    });
};