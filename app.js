var express      =  require("express"),
    app          =  express();
    bodyParser   =  require("body-parser"),

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'user detail',
  keys: ['key1','key2'],
  //maxAge: 24 * 60 * 60 * 1000

  // Cookie Options
  //maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

var cors = require("cors");
//var cookieSession = require('cookie-session');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('./controller/index.js'));
app.use(express.static("./public"));
var port = 8081;
app.listen(port,function () {
  // connect();
  console.log("listning from the port" +port);
});
