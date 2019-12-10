const express = require('express');
const router = express.Router();

const controller = require('../controllers/admin');

router.get('/login', controller.getLogin);
router.get('/graphiques', controller.getGraphics);
router.get('/config', controller.getConfig);

module.exports = router;
