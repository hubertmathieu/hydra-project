require("../../database");
const {query, ObjectId} = require("../../database");

exports.findAll = function () {
    return query("thresholds", (collection) => {
        return collection.find().toArray();
    });
};

exports.updateThresholds = function (thresholdId, threshold) {
    return query("thresholds", (collection) => {
        return collection.updateOne({_id: ObjectId(thresholdId)}, {$set: threshold});
    });
};