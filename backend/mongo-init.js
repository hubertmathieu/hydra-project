db = new Mongo().getDB('hydra');

db.createCollection('config', {capped: false});
db.createCollection('thresholds', {capped: false});

db.config.insert([
    {
        temperature1: 0,
        temperature2: 0,
        temperature3: 0,
        humidity1: 0,
        humidity2: 0,
        humidity3: 0,
        ph: 0,
        waterLevel1: 0,
        waterLevel2: 0
    }
]);

db.thresholds.insert([
    {
        treshold1: 0,
        treshold2: 0,
        treshold3: 0,
        humiditytreshold1: 0,
        humiditytreshold2: 0,
        humiditytreshold3: 0,
        phTreshold: 0
    }
]);