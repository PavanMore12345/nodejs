var express=require("express");
var router=express.Router();
var firebase= require('../config/config');
var validator = require('express-validator');
//var firebase = require("firebase");
//firebase.initializeApp(config);
router.use(validator());
router.post("/", function(request, response) {
    try {
      request.checkBody("email", "Enter a valid email address.").isEmail();
      request.checkBody(
"password",
"Enter a valid password").optional().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/);

      var errors = request.validationErrors();
              if (errors) {
                  console.log(errors);
                  response.send(errors);
                  return;
              } else {
        var email = request.body.email;
        var password = request.body.password;
        //var sess106:13=request.session;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          if(error)
            response.send({
                "status": false,
                "message": error.message
            });
            // response.send({"status":true,"message":"registration unsucessful"});
  }).then(function (data) {
    var obj={"email":email}
    request.session=obj;
     //console.log(sess.email);
    if (data)
    response.send({
        "status": true,
        "message": "Successfully login",
       "session":true
    });
  });
      }
    } catch (e) {
        response.send({
            "status": false,
            "message": "SERVER ERROR"

        });
    }
});
module.exports=router;
