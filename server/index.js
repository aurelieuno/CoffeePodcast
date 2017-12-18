const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const db = require("../database/dbconfig.js")


let app = express();

app.use(express.static(__dirname + '/../client'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send(index);
});

app.get('podcast', (req, res) => {

})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

