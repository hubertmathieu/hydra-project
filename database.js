var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hydra';

exports.findAllData = function(callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').find().toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.findAllGreenhouses = function (callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').find({type:"greenhouse"}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.findGreenhouseById = function (id, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').find({type:"greenhouse", id:id}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.findAllTowers = function (callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').find({type:"tower"}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.findTowerById = function (id, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').find({type:"tower", id:id}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.findAllTubs = function (callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').find({type:"tub"}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.findTubById = function (id, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').find({type:"tub", id:id}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.findAllUsers = function (callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('user').find().toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.findUserById = function (id, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('user').find({_id:id}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.insertData = function (data) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').insertOne(data, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
};

exports.removeData = function (data) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('data').deleteOne(data, function(err, res) {
            if (err) throw err;
            console.log("1 document removed");
            db.close();
        });
    });
};

exports.insertUser = function (user) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('user').insertOne(user, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
};

exports.removeUser = function (user) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('user').deleteOne(user, function(err, res) {
            if (err) throw err;
            console.log("1 document removed");
            db.close();
        });
    });
};

exports.findDefaultConfig = function (callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.db('hydra').collection('config').findOne(function (err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        })
    })
};

exports.updateConfig = function (config) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.db('hydra').collection('config').update({_id: config._id}, config, function (err, res) {
            if (err) throw err;
            db.close();
        })
    })
};