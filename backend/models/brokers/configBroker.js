require("../../database");
const {query, ObjectId} = require("../../database");
const {dictionary} = require("../../dictionaryModule");

exports.findConfig = function () {
    return query("config", (collection) => {
        return collection.find().toArray();
    });
};

exports.insertDefaultConfig = function () {
    return query("config", (collection) => {
        return collection.insertOne({dictionary});
    });
};

exports.updateConfig = function (configId, config) {
    return query("config", (collection) => {
        return collection.updateOne({_id: ObjectId(configId)}, {$set: config});
    });
};