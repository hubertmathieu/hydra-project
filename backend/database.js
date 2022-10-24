var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://hydra_database:27017';
let database = 'hydra';

var dict = require('./dictionaryModule');

exports.findConfig = function (callback) {
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        client.db(database).collection('config').find().toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            client.close().then();
        });
    });
};

exports.insertConfig = function (callback) {
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        client.db(database).collection('config').insertOne(dict, function(err, result) {
            if (err) throw err;
            client.db(database).collection('config').find().toArray(function(err, result) {
                if (err) throw err;
                callback(result);
                client.close().then();
            });
        });
    });
};

exports.updateConfig = function (configId, config, callback) {
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        client.db(database).collection('config').updateOne({_id: configId}, {$set: config}, function (err) {
            if (err) throw err;
            callback(err);
            client.close().then();
        });
    });
};