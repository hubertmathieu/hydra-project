var express = require('express');
var router = express.Router();


let guigui = [{
  id: 1,
  iconName : 'faTemperatureLow',
  title: "Temp.",
  value: "23.5 °C"
},
  {
    id: 2,
    iconName : 'faTint',
    title: "Humidité",
    value: "45.64 %"
  }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var  ph = req.body.ph;
  var  temp = req.body.temp;
  res.send( 'Receiving Ph : ' + ph + ' and temp : ' + temp);
});

router.get('/gui', function(req, res, next) {
  res.send(guigui);
});

module.exports = router;
