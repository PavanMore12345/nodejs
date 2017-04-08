var express = require('express'),
	app = express(),
	router = express.Router(),
	login = require('../model/login');
	var validator = require('express-validator');

	router.use(validator());
  router.post('/login', function(req,res){
		try
		{
						var loginsuccess = function (err,success) {

							if(!err)
							{
								req.session=success;

								console.log("login",req.session);
								res.send({"status":true,"message":"Successfully login"});
								//var obj={"email":email};
						  //  req.session=obj;
							}
							else
							{
								res.send({"status":false,"message":"UnSuccessfully login"});
							}
						};
						var loginData = {
							email : req.body.email,
							password : req.body.password,
						}
             console.log("login");
							req.checkBody("email", "Enter a valid email address.").isEmail();
							req.checkBody("password", "Enter a valid password").optional().matches(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z]*[A-Z])(?=.*[@#$%&_]).*$/);
							var errors = req.validationErrors();
							console.log(errors);
							if (errors) {
									res.send(errors);
									return;
							}
							login.checklogin(loginData);
							login.once("loginsuccess",loginsuccess);

						res.on("finish",function () {
									console.log("finish");
								 login.removeListener("loginsuccess", loginsuccess);
						});
						res.once("end",function () {
								console.log("end");
								 login.removeListener("loginsuccess", loginsuccess);
						});

		}catch (e)
		{
				console.log(e);
				res.send({"status":false,"message":"server error"});
		 }

	});
module.exports = router;
