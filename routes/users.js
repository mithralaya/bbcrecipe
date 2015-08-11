

var pageTitle = "BBC Recipe";

exports.index = function(req, res){

};
exports.login = function(req, res){
  res.render('login', {
    title:  pageTitle,
    selector: "login"
  });
};
exports.register = function(req, res){
  res.render('register', {
    title: pageTitle,
    selector: "register"
  });
};

