require("../../database");
const {query, ObjectId} = require("../../database");

exports.findConfig = function () {
    return query("config", (collection) => {
        return collection.find().toArray();
    });
};

exports.updateConfig = function (configId, config) {
    return query("config", (collection) => {
        return collection.updateOne({_id: ObjectId(configId)}, {$set: config});
    });
};