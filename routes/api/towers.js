var express = require('express');
var router = express.Router();

let towers = {
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

router.get('/', (req, res) => {
    return res.send(Object.values(towers));
});

router.get('/:towerId', (req, res) => {
    return res.send(towers[req.params.towerId]);
});

module.exports = router;