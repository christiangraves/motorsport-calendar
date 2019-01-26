const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const SeriesSchema = new Schema({
  name: {
    type: String
  },
 teams: {
     type: Array
 },
 events:{
     type: Array
 }
});

// This creates our model from the above schema, using Mongoose's model method
var Series = mongoose.model('Series', SeriesSchema);

// Export the Tweet model
module.exports = Series;