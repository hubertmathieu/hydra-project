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
            humidity: '346456456',
            lastSpray: '11/11/2019 - 21:33:41',
            nextSpray: '11/11/2019 - 21:38:41'
        }
    }
};


router.get('/', (req, res) => {
    return res.send(Object.values(towers));
});

router.post('/test', (req, res) => {
    let name=req.body.name;
    let message=req.body.message;
    console.log("name = "+name+", message is "+message);
    res.send("it worked")
});

router.get('/send', (req, res) => {

});

router.get('/:towerId', (req, res) => {
    return res.send(towers[req.params.towerId]);
});

module.exports = router;