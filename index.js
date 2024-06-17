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
  let timestamp;
  if (req.params.date === undefined) {
    timestamp = Date.now();
  } else {
    if (isInt(req.params.date)) {
      timestamp = req.params.date;
      //console.log('integer timestamp: ' + timestamp);
    } else {
      timestamp = Date.parse(req.params.date);
      //console.log('converted timestamp: ' + timestamp);
      if (isInt(timestamp)) {
        //console.log('converted timestamp is an integer');
      }
    }
  }

    //console.log('typeof(req.params.date): ' + typeof(req.params.date));
    //console.log('Date: ' + req.params.date);

    //console.log('timestamp: ' + timestamp + 'typeof(timestamp)' + typeof(timestamp));
    let date = new Date(parseInt(timestamp));
    //console.log('date: ' + date, 'type: ' + typeof(date));
    //let NewWeekDay = date.getDay();
    //console.log('NewWeekDay: ' + NewWeekDay);

    /*let now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(),
                date.getUTCMinutes(), date.getUTCSeconds()); */
      
    //console.log('now_utc: ' + now_utc);
    let weekDay = date.getUTCDay();
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    //console.log('weekDay: ' + weekDays[weekDay]);
    let day = date.getUTCDate();
    let returnedDay;
    if (day < 10) {
      if (day === 1) {
        returnedDay = "01";
      } else if (day === 2) {
        returnedDay = "02";
      }else if (day === 3) {
        returnedDay = "03";
      } else if (day === 4) {
        returnedDay = "04";
      } else if (day === 5) {
        returnedDay = "05";
      } else if (day === 6) {
        returnedDay = "06";
      } else if (day === 7) {
        returnedDay = "07";
      } else if (day === 8) {
        returnedDay = "08";
      } else if (day === 9) {
        returnedDay = "09";
      }
    } else {
      returnedDay = day.toString();
    }

    //console.log('returnedDay: ' + returnedDay + ' typeof(returnedDay): ' + typeof(returnedDay));
    let month = date.getUTCMonth();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //console.log("month: " + months[month]);
    let year = date.getUTCFullYear();
    let returnedYear = year.toString();
    //console.log('year: ' + returnedYear);
    let finalResponse;
    if (req.params.date === undefined) {
      let hour = date.getUTCHours();
      let returnedHour;
      if (hour < 10) {
        if (hour === 1) {
          returnedHour = "01";
        } else if (hour === 2) {
         returnedHour = "02";
       }else if (hour === 3) {
         returnedHour = "03";
       } else if (hour === 4) {
          returnedHour = "04";
        } else if (hour === 5) {
          returnedHour = "05";
       } else if (hour === 6) {
          returnedHour = "06";
       } else if (hour === 7) {
         returnedHour = "07";
       } else if (hour === 8) {
         returnedHour = "08";
       } else if (hour === 9) {
         returnedHour = "09";
       }
    } else {
      returnedHour = hour.toString();
    }
    console.log('hour: ' + hour);
    let min = date.getUTCMinutes();
    let returnedMin;
      if (min < 10) {
        if (min === 1) {
          returnedMin = "01";
        } else if (min === 2) {
         returnedMin = "02";
       }else if (min === 3) {
         returnedMin = "03";
       } else if (min === 4) {
          returnedMin = "04";
        } else if (min === 5) {
          returnedMin = "05";
       } else if (min === 6) {
          returnedMin = "06";
       } else if (min === 7) {
         returnedMin = "07";
       } else if (min === 8) {
         returnedMin = "08";
       } else if (min === 9) {
         returnedMin = "09";
       }
    } else {
      returnedMin = min.toString();
    }
    console.log('min: ' + min);
    let sec = date.getUTCSeconds();
    let returnedSec;
      if (sec < 10) {
        if (sec === 1) {
          returnedSec = "01";
        } else if (sec === 2) {
         returnedSec = "02";
       }else if (sec === 3) {
         returnedSec = "03";
       } else if (sec === 4) {
          returnedSec = "04";
        } else if (sec === 5) {
          returnedSec = "05";
       } else if (sec === 6) {
          returnedSec = "06";
       } else if (sec === 7) {
         returnedSec = "07";
       } else if (sec === 8) {
         returnedSec = "08";
       } else if (sec === 9) {
         returnedSec = "09";
       }
    } else {
      returnedSec = sec.toString();
    }
    console.log('sec: ' + sec);
    finalResponse = weekDays[weekDay] + ", " + returnedDay + " " + months[month] + " " + returnedYear + " " + returnedHour + ":" + returnedMin + ":" + returnedSec + " GMT";
    } else {
      finalResponse = weekDays[weekDay] + ", " + returnedDay + " " + months[month] + " " + returnedYear + " 00:00:00 GMT";
    }
    console.log('finalResponse: ' + finalResponse);
    console.log('____________');

/*
.toLocaleString('en-US', { timeZone: 'America/New_York' })
*/
  res.json({
    unix: Number(timestamp),
    utc: finalResponse
  })

});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
