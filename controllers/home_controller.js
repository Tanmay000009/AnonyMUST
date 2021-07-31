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
  Information.create({id : id, msg: msg, status : "tbd"},(err,info) => {
    if (err) {
      console.log("Error in creating info",err);
      res.redirect('back')
    }
    console.log(info);
  })
  res.render('successUser');
};