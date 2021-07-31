const Information = require('../models/information');

module.exports.home = function (req, res) {
    res.render('index', {user : req.user});
};

module.exports.login = function (req, res) {
  res.render('login');
};

module.exports.payment = function (req, res) {
  res.render('payment');
};

module.exports.submitPay = function (req, res) {
  res.render('submitPay');
};

module.exports.successUser = function (req, res) {
  var id = req.params.id;
  var msg = req.params.msg;
  Information.create({id : id, msg: msg, status : "tbd",files : 0},(err,info) => {
    if (err) {
      console.log("Error in creating info",err);
      res.redirect('back')
    }
  })
  res.render('successUser');
};

module.exports.verify = async function (req, res) {
  Information.findOneAndUpdate({id : req.params.id}, {status : 'verified'},(err,info) => {
    if (err) {
      console.log("Error in creating info",err);
      res.redirect('back')
    }
    })
    var info = await Information.find({status : 'tbd'},null, {limit:1}, function (err, docs) {
      if (err){
          console.log('Error in finding info',err);
      }
  });
  info = info[0];
  if (info) {
  if (info.files == 0) {
      info.filekamsg = "No files uploaded"
  } else {
      info.filekamsg = "Download files"
  }
}
  return res.render('receivers',{info : info});
};
module.exports.decline = async function (req, res) {
  Information.findOneAndUpdate({id : req.params.id}, {status : 'declined'},(err,info) => {
    if (err) {
      console.log("Error in creating info",err);
      res.redirect('back')
    }
    })
    var info = await Information.find({status : 'tbd'},null, {limit:1}, function (err, docs) {
      if (err){
          console.log('Error in finding info',err);
      }
  });
  info = info[0];
  if (info) {
  if (info.files == 0) {
      info.filekamsg = "No files uploaded"
  } else {
      info.filekamsg = "Download files"
  }
}
  return res.render('receivers',{info : info});
};
