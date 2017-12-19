var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PodcastSchema = Schema(
  {
    title: { type: String },
    description: { type: String },
    artwork_url: { type: String },
    permalink_url: { type: String },
    duration: { type: Number },
    timestamp: { type: Date, default: Date.now },
    //users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  }
);

let save = (podcast, callback) => {
  Podcast.find(podcast)
    .then(found => {
      if (found) {
        callback(found);
      } else {
      podcast.save()  
    }
  })
}
//Export model
module.exports = mongoose.model('Podcast', PodcastSchema);
module.exports.save = save;
//The first argument is the singular name of the collection your model is for.
// Defining your schema
// Everything in Mongoose starts with a Schema.Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.