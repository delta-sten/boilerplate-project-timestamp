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
    let timestamp;
    if (isInt(req.params.date)) {
      timestamp = req.params.date;
      console.log('integer timestamp: ' + timestamp);
    } else {
      timestamp = Date.parse(req.params.date);
      console.log('converted timestamp: ' + timestamp);
      if (isInt(timestamp)) {
        console.log('converted timestamp is an integer');
      }

    }
    let date = new Date(timestamp);
    console.log('date: ' + date, 'type: ' + typeof(date));
    let NewWeekDay = date.getDay();
    console.log(NewWeekDay);

    let now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(),
                date.getUTCMinutes(), date.getUTCSeconds());
    console.log(now_utc);
    let weekDay = date.toLocaleDateString('en-US', {weekday: 'short'});
    console.log('weekDay: ' + weekDay);
    let day = date.toLocaleDateString('en-US', {day: 'numeric'});
    console.log('day: ' + day);
    let month = date.toLocaleDateString('en-US', {month: 'short'});
    let year = date.toLocaleDateString('en-US', {year: 'numeric'});
    console.log('year: ' + year);

/*
.toLocaleString('en-US', { timeZone: 'America/New_York' })
*/

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
