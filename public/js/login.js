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
    url: "http://localhost:8081/checklogin",
    success: function(data){
    //  console.log(data.session);
      if(data.session === false)
      {
        console.log(data.session);
        //backToHome();
        window.location.hash='#about';
      }
      else {
        console.log("backtohome");
       nextPage();
      }
    }
    // error:function(error){
    //   console.log('page was not loaded',error);
    // }
});
function validateForm()
{
  var name=$("#userreg").val();
  var email1=$("#emailreg").val();
  var password=$("#passreg").val();
  var repass=$("#repassreg").val();
  var nameval=/^[A-Za-z]+$/;;
  var passval=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
  var emailval=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var inputVal= new Array(name,email1,password,repass);
  var inputMessage = new Array("name", "email", "password", "repass");
  var flag = true;
   $('.error').hide();

      if(inputVal[0] == ""){
          $('#userreg').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
          flag =false;
      }
      else if(!nameval.test(name)){
          $('#userreg').after('<span class="error"> Letters only</span>');
          flag=false;
      }
      if(inputVal[1] == ""){
    $('#emailreg').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
      flag=false;
      }
      else if(!emailval.test(email1)){
  $('#emailreg').after('<span class="error"> Please enter a valid email address</span>');
    flag=false;
      }

      if(inputVal[2] == ""){
          $('#passreg').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
          flag=false;
      }
      else if(!passval.test(password)){
          $('#passreg').after('<span class="error">atleast one alphabet,specialsymbol,numeric,uppercase Letters</span>');
          flag=false;
      }

      if(inputVal[3] != inputVal[2]){
          $('#repassreg').after('<span class="error">please enter correct password </span>');
          flag=false;
      }
      return flag;
}
function validatelogin()
{
  var emailid=$('#emaillog').val();
 var password=$('#passlog').val();
 var passval=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
 var emailval=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 $('.error').hide();
 var flag=true;
if(emailid == "")
{
$('#emaillog').after('<span class="error"> Please enter your email</span>');
flag =false;
 }
 else if(!emailval.test(emailid)){
     $('#emaillog').after('<span class="error"> enter correct email id</span>');
     flag=false;
 }
 if(password == "")
 {
 $('#passlog').after('<span class="error"> Please enter your password</span>');
 flag =false;
  }
  else if(!passval.test(password)){
      $('#passlog').after('<span class="error"> enter correct password</span>');
      flag=false;
  }
  return flag;
}
$(document).on('click', '#logout', function(){
  console.log("back to home");
  $.ajax({
      type: "GET",
      //data:userdetail,
      dataType: "json",
      //headers:{"Content-Type":"application/json"},
      url: "http://localhost:8081/logout",
      success: function(data){
        //  alert(data);
        if(data.status==false){
         window.location.hash = "#home";
   location.reload();

       }
      },
      error:function(error){
        console.log('page was not loaded',error);
      }
//  backToHome();
});
});
$("#register").click(function()
{
 if(validateForm())
 {
  var name=$("#userreg").val();
  var email1=$("#emailreg").val();
  var password=$("#passreg").val();
  var repass=$("#repassreg").val();
     var temp=[];
   var userdetail={};
   userdetail["email"]=email1;
   userdetail["password"]=password;
   $.ajax({
       type: "POST",
       data:userdetail,
       dataType: "json",
       //headers:{"Content-Type":"application/json"},
       url: "http://localhost:8081/signup",
       success: function(data){
          alert(data);
       },
       error:function(error){
         console.log('page was not loaded',error);
       }
   });
alert("data inserted successfully");
}
});

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
  if(validatelogin())
  {
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
     url: "http://localhost:8081/login",
     success: function(data){
       if(data.status==true)
       {
       console.log("hi");
       nextPage();
       alert("login successfully");
     }
      //  alert(data.status);
     }
 });
 }
});
function backToHome()
{
  $.ajax({
    url:"index.html",
    type:"GET",
    datatype:'html',
    success:function(response)
    {
    console.log('page was not loaded',response);
    //$('body').html(response);
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
});
