

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

exports.save = function(req, res){
  this.user = {};

  //var privateKey = config.recaptchaPrivateKey;
  //var ip = req.ip;
  //var challenge = req.body.recaptcha_challenge_field;
  //var response = req.body.recaptcha_response_field;
  var error = false;

  var uriParts = "?access_type="+req.body.access_type
      +"&redirect_uri="+req.body.redirect_uri
      +"&response_type="+req.body.response_type
      +"&client_id="+req.body.client_id
      +"&scope="+req.body.scope;

  var uriObject = {
    "access_type"   : req.body.access_type,
    "redirect_uri"  : req.body.redirect_uri,
    "response_type" : req.body.response_type,
    "client_id"     : req.body.client_id,
    "scope"         : req.body.scope
  };

  req.body.hash = helper.createHash("verification code");

  if(req.body.email !== undefined){
    req.body.email =  req.body.email.toLowerCase();
  }

  var userObject =
  {
    "0": {
      "firstName"         : req.body.firstName,
      "lastName"          : req.body.lastName,
      "email"             : req.body.email,
      "username"          : req.body.username,
      "password"          : req.body.password,
      "hash"              : req.body.hash
    }
  };



  if(user.validateCreateUser(userObject, true, req.messageInstance)){
    res.render('register', {
      title:  config.projectName,
      companyName: config.companyName,
      environment   : config.environment,
      selector: "register",
      uriParts: uriParts,
      hiddenPost: uriObject,
      formObject: req.body,
      errors: req.messageInstance.get("error")});
  }else{

    user.validateEmail(userObject[0].email.toLowerCase(), false, function(err) {
      error = err;
      user.validateUsername(userObject[0].username, false, function(userNameExist) {
        if (error != false || userNameExist != false) {
          res.render('register', {
            title:  config.projectName,
            companyName: config.companyName,
            environment   : config.environment,
            selector: "register",
            uriParts: uriParts,
            hiddenPost: uriObject,
            formObject: req.body,
            errors: req.messageInstance.get("error")});
        }
        else
        {
          user.create(userObject, uriParts, function(id) {
            if (!id) {
              res.render('register', {
                title:  config.projectName,
                companyName: config.companyName,
                environment   : config.environment,
                selector: "register",
                uriParts: uriParts,
                hiddenPost: uriObject,
                formObject: req.body,
                errors: req.messageInstance.get("error")});
            }
            else
            {
              req.session.user = [];
              req.session.user[0] = {};
              req.session.user[0].id = id;
              req.session.user[0].firstName = req.body.firstName;
              req.session.user[0].lastName = req.body.lastName;
              req.session.user[0].email = req.body.email;
              req.session.user[0].username = req.body.username;
              if(req.body.redirect_uri === "undefined")
              {
                res.render('success', {
                  title:  config.projectName,
                  companyName: config.companyName,
                  environment   : config.environment,
                  selector: "registerSuccess",
                  formObject: req.body,
                  uriParts: uriParts,
                  hiddenPost: uriObject,
                  code : userObject[0].hash,
                  user: req.session.user[0],
                  errors: req.messageInstance.get("error"),
                  success: req.messageInstance.get("success"),
                  devError: req.messageInstance.get("devError")});
              }
              else
              {
                if(!res.headerSent)
                {
                  console.log(req.session.user);
                  res.redirect("/access"+uriParts);
                }
              }

              //res.render("/register/success", {uriParts: uriObject });
            }
          }, req.messageInstance);
        }
      }, req.messageInstance);
    }, req.messageInstance);
  }

};