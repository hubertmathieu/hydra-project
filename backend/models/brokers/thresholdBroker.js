require("../../database");
const {query, ObjectId} = require("../../database");

exports.findAll = function () {
    return query("thresholds", (collection) => {
        return collection.find().toArray();
    });
};

exports.updateThresholds = function (thresholdId, humidityMinThreshold1, humidityMaxThreshold1, humidityMinThreshold2, humidityMaxThreshold2, humidityMinThreshold3, humidityMaxThreshold3) {
    return query("thresholds", (collection) => {
        return collection.updateOne({_id: ObjectId(thresholdId)}, {
            "humidityMinThreshold1": humidityMinThreshold1,
            "humidityMaxThreshold1": humidityMaxThreshold1,
            "humidityMinThreshold2": humidityMinThreshold2,
            "humidityMaxThreshold2": humidityMaxThreshold2,
            "humidityMinThreshold3": humidityMinThreshold3,
            "humidityMaxThreshold3": humidityMaxThreshold3,
        });
    });
};