var	firebase = require('../config.js'),
 ref = firebase.database().ref();
 var EventEmitter = require('events').EventEmitter;
 var util = require('util');

	var signup = function() {
			var self = this;
			EventEmitter.call(this);
		};
util.inherits(signup, EventEmitter);
		var signupEvent = new signup();
signup.prototype.saveUser = function(data){
var email=data.email;
var password=data.password;
 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  if(error)
signupEvent.emit("signupsucess",error.message,null);

                                // response.send({"status":true,"message":"registration unsucessful"});
                      }).then(function (data) {
  //var obj={"email":email}
  //  request.session=obj;
 signupEvent.emit("signupsucess",null,"you are online");
});
}
module.exports = signupEvent;
