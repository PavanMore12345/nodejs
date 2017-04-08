 var firebase = require("firebase");
var config={
    apiKey: "AIzaSyC6FU45EJwmsoKoS_HTPAYekcw_FJ_MZRI",
    authDomain: "login-bbfa2.firebaseapp.com",
    databaseURL: "https://login-bbfa2.firebaseio.com",
    storageBucket: "login-bbfa2.appspot.com",
    messagingSenderId: "417352517428"
  };
var firebase= firebase.initializeApp(config);
module.exports = firebase;
