// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

app.get("/api/:date?", (req, res) => {
  if (req) {
    console.log('Date: ' + req.params.date);
    if (isInt(req.params.date)) {
      console.log("it's an integer");
    }
    let timestamp = Date.parse(req.params.date);
    let date = new Date(timestamp);
    let year = date.toLocaleDateString('en-US', {year: 'numeric'});
    //console.log('year ' + year);
    let weekDay = date.toLocaleDateString('en-US', {weekday: 'short'});
    //console.log('weekDay ' + weekDay);

    res.json({
      unix: Number(timestamp),
      //utc: 
    });
  };
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
