require("../../database");
const {query, ObjectId} = require("../../database");

exports.findConfig = function () {
    return query("config", (collection) => {
        return collection.find().toArray();
    });
};

exports.updateConfig = function (configId, humidity1, humidity2, humidity3, temperature1, temperature2, temperature3) {
    return query("config", (collection) => {
        return collection.updateOne({_id: ObjectId(configId)}, {
            $set: {
                "humidity1": humidity1,
                "humidity2": humidity2,
                "humidity3": humidity3,
                "temperature1": temperature1,
                "temperature2": temperature2,
                "temperature3": temperature3,
            }
        });
    });
};