var express = require('express'),
	app = express(),
	router = express.Router(),
	signup = require('../model/signup');
  //signup = new signupClass();
var validator = require('express-validator');

	router.use(validator());
  router.post('/signup', function(req,res)
{
try
		{
						var signupsuccess = function (err,success) {
							if(!err)
							{
								res.send({"status":true,"message":"Signup sucessful"});
							}
							else
							{
								res.send({"status":false,"message":"signup unsucessful"});
							}
						};
						var loginData = {
							email : req.body.email,
							password : req.body.password,
						}

							req.checkBody("email", "Enter a valid email address.").isEmail();
							req.checkBody("password", "Enter a valid password").optional().matches(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z]*[A-Z])(?=.*[@#$%&_]).*$/);
							var errors = req.validationErrors();
							console.log(errors);
							if (errors) {
									res.send(errors);
									return;
							}
							signup.saveUser(loginData);
							signup.once("signupsucess",signupsuccess);

						res.on("finish",function () {
									console.log("finish");
								 signup.removeListener("signupsucess", signupsuccess);
						});
						res.once("end",function () {
								console.log("end");
								 signup.removeListener("signupsucess", signupsuccess);
						});
}
		catch (e)
		{
				console.log(e);
				res.send({"status":false,"message":"server error"});
		 }

	});
module.exports = router;
