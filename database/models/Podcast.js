var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var Schema = mongoose.Schema;

var PodcastSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    image_url: { type: String },
    link_url: { type: String },
    timestamp: { type: Date, default: Date.now },

  }
);

//Export model
module.exports = mongoose.model('Podcast', PodcastSchema);

//The first argument is the singular name of the collection your model is for.
// Defining your schema
// Everything in Mongoose starts with a Schema.Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.