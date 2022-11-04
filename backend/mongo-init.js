db = new Mongo().getDB('hydra');

db.createCollection('config', {capped: false});
db.createCollection('thresholds', {capped: false});

db.config.insert([
    {
        a: 0,
        b: 0,
        c: 0,
        f: 0,
        g: 0,
        h: 0,
        m: 0,
        n: 0,
        o: 0
    }
]);

db.thresholds.insert([
    {
        d: 0,
        e: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        p: 0
    }
]);