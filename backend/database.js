const {ObjectId, MongoClient} = require("mongodb");
const url = 'mongodb://hydra_database:27017';
const database = 'hydra';

exports.query = async function (collection, callback) {
    const client = await MongoClient.connect(url);
    let db = client.db(database);
    const result = await callback(db.collection(collection));
    await client.close();
    return result;
}

module.exports.ObjectId = ObjectId;