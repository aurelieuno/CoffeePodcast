const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const db = require("../database/dbconfig.js")
const dbpod = require("../database/models/podcast.js")
const Podcast = require("../database/models/podcast.js")
const User = require("../database/models/user.js")
let app = express();
app.use(express.static(__dirname + '/../client'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send(index);
});
/////////////////////////PODCAST////////////////////////////////////////////////
app.post('/podcast', (req, res) => {
  let podcast = {
    title: req.body.title,
    description: req.body.description,
    artwork_url: req.body.artwork_url,
    permalink_url: req.body.permalink_url,
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
/////////////////////////USER////////////////////////////////////////////////
app.post('/user', (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  if (username) {
    User.findOne({username})
      .then(found => {
        if (found) {
          res.send("User Already Exists");
        } else {
          let user = new User();
          user.username = username;
          user.password = user.generateHash(password)
          console.log(user);
          User.create(user)
            .then(result => {
              console.log(result);
              res.send(result)
            })
            .catch(err => console.log(err))
        }
      })
  } else {
    res.send('No User to save')
  }
})
app.post('/checkuser', (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  User.findOne({username})
      .then(user => {
        if (user) {
          user.comparePassword(password, match => {
            if (match) {
              res.send(match)
              //res.redirect('/');
            } else {
              res.send("Password does not exists")
            }
          })
        } else {
          res.send("This user does not exists")
        }
        })

})

app.get('/users', (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => console.log(err))
})
/////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

