const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
//const mongoDB = 'mongodb://localhost:27017/podcast';
const mongoDB ='mongodb://aurelieuno:ron66ron@ds043200.mlab.com:43200/podcastcoffee';

mongoose
  .connect(mongoDB, { useMongoClient: true })
  .then(({ db: { databaseName } }) =>
    console.log(`Connected to ${databaseName}`)
  )
  .catch(err => console.error(err));



