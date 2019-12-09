var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.getAccueil);
router.get('/statistiques', controller.getStatistiques);
router.get('/serre', controller.getSerre);
router.get('/a-propos', controller.getPropos);

let guigui = [{
  id: 1,
  title: "Temp.",
  value: "30.6 °C"
},
  {
    id: 2,
    title: "Humidité",
    value: "56.43 %"
}];

router.get('/gui', function(req, res, next) {
  res.send(guigui);
});

module.exports = router;
