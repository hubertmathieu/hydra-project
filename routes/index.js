var express = require('express');
var router = express.Router();


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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gui', function(req, res, next) {
  res.send(guigui);
});

module.exports = router;
