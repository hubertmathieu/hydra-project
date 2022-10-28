require("../../database");
const {query, ObjectId} = require("../../database");
const {thresholds} = require("../../dictionaryModule");

exports.findAll = function () {
    return query("thresholds", (collection) => {
        return collection.find().toArray();
    });
};

exports.insertDefaultThresholds = function () {
    return query("thresholds", (collection) => {
        return collection.insertOne({thresholds});
    });
};

exports.updateThresholds = function (thresholdId, threshold) {
    return query("thresholds", (collection) => {
        return collection.updateOne({_id: ObjectId(thresholdId)}, {$set: threshold});
    });
};