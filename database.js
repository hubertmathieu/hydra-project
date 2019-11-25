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
