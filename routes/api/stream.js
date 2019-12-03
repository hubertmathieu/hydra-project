var express = require('express');
var router = express.Router();
var SSE = require('express-sse');
var sse = new SSE();

router.get('/', (req, res) => {
    sse.init(req, res);
    sse.send("Bonjour", "message", 0);
    res.render('index', {title: 'Express'});
});

module.exports = router;