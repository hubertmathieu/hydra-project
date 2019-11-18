var express = require('express');
var router = express.Router();

router.get('/serre', function(req, res, next) {
    var path = require('path');
    res.set('Content-Type', 'image/svg+xml');
    console.log(path.dirname(require.main.filename));
    res.sendFile(path.dirname(require.main.filename) + "/svgs/test-serre.svg");
});

module.exports = router;
