const User = require('../models/user');
const Information = require('../models/information');

module.exports.createSession = async function(req, res){
    console.log("creating session");
    var info = await Information.find({status : 'tbd'},null, {limit:1}, function (err, docs) {
        if (err){
            console.log('Error in finding info',err);
        }
    });
    info = info[0];
    if (info.files == 0) {
        info.filekamsg = "No files uploaded"
    } else {
        info.filekamsg = "Download files"
    }
    return res.render('receivers',{info : info});
}

module.exports.destroySession = function(req, res){
    req.logout();
    
    return res.redirect('/');
}