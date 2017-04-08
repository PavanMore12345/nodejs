var express=require("express");
var router=express.Router();

router.get("/checklogin",function (req, res) {
  console.log(req.session);
   if(req.session.email==undefined){
     res.send({"status":false,"message":"no user","session":false});
   }else{
     res.send({"status":true,"message":"user exist","session":true});
   }

  // console.log(request.session);

})
module.exports=router;
