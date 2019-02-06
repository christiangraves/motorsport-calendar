const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;
require('dotenv').config();
const session = require('express-session');
const passport = require('./passport');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/motorsports");
mongoose.connect(process.env.MONGODB_URI || "mongodb://motorsport1:pass123@ds225078.mlab.com:25078/heroku_qdsgbc02");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});