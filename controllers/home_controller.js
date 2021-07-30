module.exports.home = function (req, res) {
    res.render('index', {user : req.user});
};

module.exports.login = function (req, res) {
  res.render('login');
};

module.exports.payment = function (req, res) {
  res.render('payment');
};