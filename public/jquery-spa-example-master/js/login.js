$(document).ready(function()
{
// $(document).on('click', '#logout', function()
//  {
//    //sessionStorage.removeItem('nextpage');
//    backToHome();
//  });

//if(sessionStorage.getItem('nextpage')!=null)
//{
// nextPage();
// //}
$.ajax({
    type: "GET",
    //dataType: "html",
    //headers:{"Content-Type":"application/json"},
    url: "http://localhost:8091/checklogin",
    success: function(data){
      console.log(data.session);
      if(data.session==true)
      {
        console.log(data.session);
        //nextPage();
      }
      else {
        console.log("backtohome");
      //  backToHome();
      }
    },
    error:function(error){
      console.log('page was not loaded',error);
    }
});
// function validateForm()
// {
//   var name=$("#userreg").val();
//   var email1=$("#emailreg").val();
//   var password=$("#passreg").val();
//   var repass=$("#repassreg").val();
//   var nameval=/^[A-Za-z]+$/;;
//   var passval=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
//   var emailval=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   var inputVal= new Array(name,email1,password,repass);
//   var inputMessage = new Array("name", "email", "password", "repass");
//   var flag = true;
//    $('.error').hide();
//
//       if(inputVal[0] == ""){
//           $('#userreg').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
//           flag =false;
//       }
//       else if(!nameval.test(name)){
//           $('#userreg').after('<span class="error"> Letters only</span>');
//           flag=false;
//       }
//       if(inputVal[1] == ""){
//     $('#emailreg').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
//       flag=false;
//       }
//       else if(!emailval.test(email1)){
//   $('#emailreg').after('<span class="error"> Please enter a valid email address</span>');
//     flag=false;
//       }
//
//       if(inputVal[2] == ""){
//           $('#passreg').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
//           flag=false;
//       }
//       else if(!passval.test(password)){
//           $('#passreg').after('<span class="error">atleast one alphabet,specialsymbol,numeric,uppercase Letters</span>');
//           flag=false;
//       }
//
//       if(inputVal[3] != inputVal[2]){
//           $('#repassreg').after('<span class="error">please enter correct password </span>');
//           flag=false;
//       }
//       return flag;
// }
$(document).on('click', '#logout', function(){
  console.log("back to home");
  // $.ajax({
  //     type: "POST",
  //     data:userdetail,
  //     dataType: "json",
  //     //headers:{"Content-Type":"application/json"},
  //     url: "http://localhost:8091/logout",
  //     success: function(data){
  //       //  alert(data);
  //       if(data.status==false){
  //       //  window.location.hash = "#home";
  //   // location.reload();
  //
  //      }
  //     },
  //     error:function(error){
  //       console.log('page was not loaded',error);
  //     }
  });

});
$("#register").click(function()
{
// if(validateForm())
// {
  var name=$("#userreg").val();
  var email1=$("#emailreg").val();
  var password=$("#passreg").val();
  var repass=$("#repassreg").val();
     var temp=[];
   var userdetail={};
   //sessionStorage.name1=name;
   //sessionStorage.email=email1;
  // sessionStorage.password=password;
   //sessionStorage.repassword=repass;
   //userdetail.name1 =name;
   userdetail["email"]=email1;
   userdetail["password"]=password;
   $.ajax({
       type: "POST",
       data:userdetail,
       dataType: "json",
       //headers:{"Content-Type":"application/json"},
       url: "http://localhost:8091/signup",
       success: function(data){
          alert(data);
       },
       error:function(error){
         console.log('page was not loaded',error);
       }
   });
 // }
  // temp[temp.length]=userdetail;
//    console.log(JSON.stringify(temp));
//    abc=JSON.parse(sessionStorage.getItem("user11"));
//    if(abc!==null)
//    {
//      temp=abc;
//      temp[temp.length]=userdetail;
//       if (typeof(Storage) !== undefined) {
// sessionStorage.setItem('user11',JSON.stringify(temp));
// }
// }else {
//    temp[temp.length]=userdetail;
//     if (typeof(Storage) !== undefined) {
//    sessionStorage.setItem('user11',JSON.stringify(temp));
// }
// }
alert("data inserted successfully");
//$('#register').attr("type","reset");
//backToHome();
});

// function validatelogin()
// {
//   pqr=JSON.parse(sessionStorage.getItem("user11"));
//   flag=true;
//   console.log(pqr);
//   for(var i=0;i<pqr.length;i++)
//   {
//      //$('.error').hide();
//     var emailid=$('#emaillog').val();
//     var password11=$('#passlog').val();
//     //console.log(emailid);
//     //console.log(password11);
//     console.log(pqr[i].email);
//     console.log(pqr[i].password);
//  $('.error').hide();
//
//      if(pqr[i].email!=emailid)
//      {
//          $('#emaillog').after('<span class="error">please enter correct email id </span>');
//          flag=false;
//      }
//      if(pqr[i].password!=password11)
//      {
//          $('#passlog').after('<span class="error">please enter correct password </span>');
//          flag=false;
//      }
//      if(pqr[i].email==emailid && pqr[i].password==password11)
//      {
//        flag=true;
//        break;
//      }
//    }
//   return flag;
// }
function nextPage()
{
  $.ajax({
    url:"./template/welcome.html",
    type:"GET",
    datatype:'html',
    success:function(response)
    {
    console.log('page was not loaded',response);
    $('body').html(response);
  },
  error:function(error){
    console.log('page was not loaded',error);
  },
  complete:function(xhr,status)
  {
    console.log('request is completed');
  }
});
}
function nextLogin()
{
  $.ajax({
    url:"/template/login.html",
    type:"GET",
    datatype:'html',
    success:function(response)
    {
    console.log('page was not loaded',response);
    $('body').html(response);
  },
  error:function(error){
    console.log('page was not loaded',error);
  },
  complete:function(xhr,status)
  {
    console.log('request is completed');
  }
});
}
function nextSignup()
{
  $.ajax({
    url:"/template/signup.html",
    type:"GET",
    datatype:'html',
    success:function(response)
    {
    console.log('page was not loaded',response);
    $('body').html(response);
  },
  error:function(error){
    console.log('page was not loaded',error);
  },
  complete:function(xhr,status)
  {
    console.log('request is completed');
  }
});
}

//$(document).on('click', '#loginPage', function()
$("#loginPage").click(function()
{
  // if(validatelogin())
  //   {
  //     sessionStorage.setItem('nextpage',"nextpage");
  //     nextPage();
  //   alert("login successfully");
  //   }
  var emailid=$('#emaillog').val();
 var password11=$('#passlog').val();
 var logindata={};
 logindata["email"]=emailid;
 logindata["password"]=password11;
 JSON.stringify(logindata);
 $.ajax({
     type: "POST",
     data:logindata,
     dataType: "json",
      //headers:{"Content-Type":"application/json"},
     url: "http://localhost:8091/login",
     success: function(data){
       if(data.status==true)
       {
       console.log("hi");
       nextPage();
     }
        alert(data.status);
     }
 });
    //sessionStorage.setItem('nextpage',"nextpage");

});
// $('#login').click(function()
// {
//   nextLogin();
// });
// $('#signup').click(function(){
//   nextSignup();
// });
function backToHome()
{
  $.ajax({
    url:"index.html",
    type:"GET",
    datatype:'html',
    success:function(response)
    {
    console.log('page was not loaded',response);
    $('body').html(response);
  },
  error:function(error){
    console.log('page was not loaded',error);
  },
  complete:function(xhr,status)
  {
    console.log('request is completed');
  }
 });
 }
// $('#backtohome').click(function()
// {
//   backToHome();
// });
// $("#form1").keydown(function () {
//     if(event.keyCode == 13){
//         event.preventDefault();
//         if(validatelogin())
//         {
//           nextPage();
//         alert("login successfully");
//         }
//     }
// });
});
