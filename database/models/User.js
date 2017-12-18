var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

// Schema Methods
UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    callback(isMatch);
  });
},
  //Export model
  module.exports = mongoose.model('User', UserSchema);

//The first argument is the singular name of the collection your model is for.
// Defining your schema
// Everything in Mongoose starts with a Schema.Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.