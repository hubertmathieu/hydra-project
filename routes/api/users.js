var express = require('express');
var router = express.Router();

let users = {
  1: {
    id: '1',
    type: 'tower',
    name: 'tower 1',
    data: {
      temperature: '36C',
      humidity: '21%',
      lastSpray: '11/11/2019 - 21:33:41',
      nextSpray: '11/11/2019 - 21:38:41'
    }
  },
  2: {
    id: '2',
    type: 'tower',
    name: 'tower 1',
    data: {
      temperature: '36C',
      humidity: '21%',
      lastSpray: '11/11/2019 - 21:33:41',
      nextSpray: '11/11/2019 - 21:38:41'
    }
  }
};

router.get('/', function(req, res, next) {
  return res.send(Object.values(users));
});

router.get('/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

module.exports = router;
