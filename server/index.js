const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const PORT = process.env.PORT || 3000;
const db = require('../database/dbconfig.js');
const dbpod = require('../database/models/podcast.js');
const Podcast = require('../database/models/podcast.js');
const User = require('../database/models/user.js');

const app = express();
app.use(express.static(`${__dirname}/../client`));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send(index);
});
// ///////////////////////PODCAST////////////////////////////////////////////////
app.post('/podcast', (req, res) => {
  const podcast = {
    title: req.body.title,
    description: req.body.description,
    artwork_url: req.body.artwork_url,
    permalink_url: req.body.permalink_url,
    duration: req.body.duration,
  };
  if (podcast) {
    Podcast.findOne(podcast)
      .then((found) => {
        if (found) {
          res.send(found);
        } else {
          const savedPodcast = new Podcast(podcast);
          savedPodcast.save()
            .then(result => res.send(result))
            .catch(err => console.log(err));
        }
      });
  } else {
    res.send('No Podcast to save');
  }
});

app.get('/podcasts', (req, res) => {
  Podcast.find()
    .then(podcasts => res.send(podcasts))
    .catch(err => console.log(err));
});

app.post('/deletePodcast', (req, res) => {
  const podcast = req.body;
  Podcast.findOne(podcast)
    .then((found) => {
      if (found) {
        Podcast.remove(podcast)
          .then(podcast => res.send(podcast))
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));

});
// ///////////////////////USER////////////////////////////////////////////////
app.post('/user', (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  if (username) {
    User.findOne({ username })
      .then((found) => {
        if (found) {
          res.send('User Already Exists');
        } else {
          const user = new User();
          user.username = username;
          user.password = user.generateHash(password);
          User.create(user)
            .then((result) => {
              res.send(result.username);
            })
            .catch(err => console.log(err));
        }
      });
  } else {
    res.send('No User to save');
  }
});
app.post('/checkuser', (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username })
    .then((user) => {
      if (user) {
        user.comparePassword(password, (match) => {
          if (match) {
            res.send(user.username);
          } else {
            res.send('Password is not correct');
          }
        });
      } else {
        res.send('No Match');
      }
    });

});

app.get('/users', (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => console.log(err));
});
// ///////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

