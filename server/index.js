const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const db = require("../database/dbconfig.js")
const dbpod = require("../database/models/podcast.js")
const Podcast = require("../database/models/podcast.js")
let app = express();
app.use(express.static(__dirname + '/../client'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send(index);
});

app.post('/podcast', (req, res) => {
  let podcast = {
    title: req.body.title,
    description: req.body.user.username,
    image_url: req.body.artwork_url,
    link_url: req.body.permalink_url,
    duration: req.body.duration,
  }
  if (podcast) {
    Podcast.findOne(podcast)
      .then(found => {
        if (found) {
          res.send(found);
        } else {
          let savedPodcast = new Podcast(podcast)
          savedPodcast.save()
          .then(result => res.send(result))
          .catch(err => console.log(err))
        }
      })
  } else {
    res.send('No Podcast to save')
  }
})

app.get('/podcasts', (req, res) => {
  Podcast.find()
    .then(podcasts => res.send(podcasts))
    .catch(err => console.log(err))
})

app.post('/deletePodcast', (req, res) => {
  let podcast = req.body;
  Podcast.findOne(podcast)
    .then(found => {
      if (found) {
        Podcast.remove(podcast)
          .then(podcast => res.send(podcast))
          .catch(err=> console.log(err))
    }
    })
    .catch(err => console.log(err))

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

