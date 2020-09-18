var database = require('../database');

module.exports = {
    verifyAuthentification: function(req,res,next) {
        const data = { username, password }=req.body;
        if(isAuthentified(data)) {
            return next();
        }
        res.send("You are not allowed to access this ressource");
    }
};

function isAuthentified(userInfo) {
    database.authentifyUser(userInfo,(data) => {
        if (data.length > 0) return true;
    });
    return false;
}