 var	firebase = require('../config.js'),
   ref = firebase.database().ref();
   var EventEmitter = require('events').EventEmitter;
   var util = require('util');
   var login = function() {
      var self = this;
      EventEmitter.call(this);
		};
    util.inherits(login, EventEmitter);
    var loginEvent = new login();
login.prototype.checklogin = function(bodydata) {
var email = bodydata.email;
var password = bodydata.password;
console.log("sign in");
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          if(error)
         //   response.send({
           //     "status": false,
         //       "message": error.message
          //  });
   loginEvent.emit("loginsuccess",error.message,null);
}).then(function (data) {
  console.log(data.email);
     //console.log(sess.email);
     var useremail={"email":data.email};
    if (data)
   // response.send({
      //  "status": true,
      //  "message": "Successfully login",
      // "session":true
     loginEvent.emit("loginsuccess",null,useremail);
  });
}
module.exports = loginEvent;
