db = new Mongo().getDB('hydra');

db.createCollection('config', {capped: false});
db.createCollection('thresholds', {capped: false});

db.config.insert([
    {
        temperature1: 0.0,
        temperature2: 0.0,
        temperature3: 0.0,
        humidity1: 0.0,
        humidity2: 0.0,
        humidity3: 0.0,
        ph: 0.0,
        waterLevel1: 0.0,
        waterLevel2: 0.0
    }
]);

db.thresholds.insert([
    {
        humidityMinThreshold1: 0.0,
        humidityMinThreshold2: 0.0,
        humidityMinThreshold3: 0.0,
        humidityMaxThreshold1: 0.0,
        humidityMaxThreshold2: 0.0,
        humidityMaxThreshold3: 0.0,
        phThreshold: 0.0
    }
]);