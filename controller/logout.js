var express=require("express");
var router=express.Router();

router.get("/logout",function (request, response) {
  console.log(request.session);
  request.session=null;
  response.send({"status":false,"message":"logout success","session":false});
})


module.exports=router;
