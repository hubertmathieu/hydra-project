const express = require('express');
const router = express.Router();

const controller = require('../controllers/admin');

router.get('/login', controller.getLogin);
router.get('/', controller.getIndex);

module.exports = router;
