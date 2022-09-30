var express = require('express');
var router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.getAccueil);
router.get('/statistiques', controller.getStatistiques);
router.get('/serre', controller.getSerre);
router.get('/a-propos', controller.getPropos);

module.exports = router;
