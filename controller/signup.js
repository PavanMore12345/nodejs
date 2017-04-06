var express=require("express");
var router=express.Router();
//var firebase=require("firebase");
var firebase= require('../config/config');
//firebase.initializeApp(config);
var validator = require('express-validator');
router.use(validator());
router.post("/", function(request, response) 
{
try {
                // ref.child(request.body.username).set({
                //   name:request.body.username,
                //   password:request.body.password
                //     });
                //request.checkBody("request.body.email", "Enter a valid email address.").isEmail();
                var email = request.body.email;
                var password = request.body.password;

                request.checkBody("email", "Enter a valid email address.").isEmail();
                request.checkBody("password","Enter a valid password").optional().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/);
//var flag=0;
                var errors = request.validationErrors();
                        if (errors) {
                            response.send(errors);
                            return;
                        } else {

                            console.log("auth");
                            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                              if(error)
                                response.send({
                                    "status": false,
                                    "message": error.message
                                });
                                // response.send({"status":true,"message":"registration unsucessful"});
                      }).then(function (data) {
                        if (data)
                        response.send({
                            "status": true,
                            "message": "Successfully signup"
                        });

                      });
                        // if(flag==1)
                        // {
                        //   console.log("registration unsucessful");
                        //   response.send({
                        //       "status": true,
                        //       "message": "registration unsucessful"
                        //   });
                        // }
                        //
                        //   console.log("regs Successfull");
                        // response.send({
                        //     "status": true,
                        //     "message": "registration Success"
                        // });
                        }

                    } catch (e) {
                        console.log(e);
                        response.send({
                            "status": false,
                            "message": "SERVER ERROR"
                        });
                    }
                });
module.exports=router;
