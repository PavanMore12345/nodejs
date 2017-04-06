var express = require("express"); //Http  server but framework  node js i will create http server (web services,REST API)
var app = express();
var port = process.env.PORT||8091;
var bodyParser = require("body-parser");
//var port = process.env.PORT||8082;
var cors = require("cors");
//var cookieSession = require('cookie-session');
var cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'user detail',
  keys: ['key1','key2'],
  //maxAge: 24 * 60 * 60 * 1000

  // Cookie Options
  //maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("./public"));
//var validator = require('express-validator');
//var regex = require("regex");
app.use(require('./controller'));

app.listen(port, function() {
    console.log("server port %d has started", port);
});
