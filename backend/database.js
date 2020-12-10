var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hydra';

var dict = require('./dictionnaryModule');

exports.authentifyUser = function(userInfo, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.db('hydra').collection('user').find({username:userInfo.username, password:userInfo.password}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

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
        db.db('hydra').collection('user').findOne({_id:id}, function(err, result) {
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

exports.updateConfig = function (configId, config, callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.db('hydra').collection('config').updateOne({_id: configId}, {$set: config}, function (err) {
            if (err) throw err;
            callback(err);
            db.close();
        })
    })
};

exports.findDefaultThreshold = function (data , callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var query = {serreId:  Number(data)};
        db.db('hydra').collection('threshold').findOne(query, function (err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        })
    })
};


function sensorArrayToObject(values){
    let retObj = {};
    for(let i=0; i<values.length; ++i){
        retObj[Object.keys(dict).find(key => dict[key] === values[i].header)] = values[i].data
    }
    return retObj;
}

function getChangesFormatted(newValues) {
    var changes = [];
    console.log(dict);
    for (propertyName in newValues){
        if(propertyName != "serreId") {
            newValues[propertyName] =  parseFloat(newValues[propertyName]);
            var name = dict[propertyName];
            changes.push({ "header": name, "data" : newValues[propertyName]});
        }
    }
    console.log(changes);
    return changes;
}

exports.updateThreshold = function (thresholdId, newValues) {
    newValues.configChanges = getChangesFormatted(newValues);
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.db('hydra').collection('threshold').updateOne({_id: thresholdId}, {$set: newValues}, function (err, res) {
            if (err) throw err;
            db.close();
        })
    })
};

exports.getConfigBuffer = function(ghId, callback){
    mongoClient.connect(url, function (err, db){
       if(err) throw err;
       db.db('hydra').collection('threshold').findOne({serreId: ghId}, {configChanges: true, _id: false}, function (err, result){
           if(err) throw err;
           callback(result);
           db.close();
       });
    });
}

exports.updateSensors = function(data, serreId, callback = null){
    data = sensorArrayToObject(data);
    mongoClient.connect(url, function (err, db){
        if(err) throw err;
        db.db('hydra').collection('threshold').update({serreId: serreId}, {$set: data}, function (err, res){
            if(err) throw err;
            if(callback)callback(res);//todo change to res
            db.close();
        });
    });
};

exports.cleanConfigBuffer = function cleanConfigBuffer(id){
	mongoClient.connect(url, function(err, db){

		db.db('hydra').collection('threshold').updateOne({serreId: id}, {configChanges: []}, function(){
			if(err) throw err;
			db.close();
		})

	});
}

exports.saveConfigBuffer = function(ghId, changes){
    mongoClient.connect(url, function (err, db){
        if(err) throw err;
        db.db('hydra').collection('threshold').update({serreId: ghId}, {$set:{configChanges: changes}}, function (err, result){
            if(err) throw err;
            db.close();
        })
    });
}
