var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  //podcasts: [{ type: Schema.Types.ObjectId, ref: 'Podcast'}]
});


  //Export model
  module.exports = mongoose.model('User', UserSchema);

//The first argument is the singular name of the collection your model is for.
// Defining your schema
// Everything in Mongoose starts with a Schema.Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

