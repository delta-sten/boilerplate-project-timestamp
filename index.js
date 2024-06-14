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
  let now;
  //let finalResponses;
  //let finalResponse;
  if (req.params.date === undefined) {
    timestamp = Date.now();
    let dates = new Date(parseInt(timestamp));
    //console.log('date: ' + date, 'type: ' + typeof(date));
    //let NewWeekDay = date.getDay();
    //console.log('NewWeekDay: ' + NewWeekDay);

    /*let now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(),
                date.getUTCMinutes(), date.getUTCSeconds()); */
      
    //console.log('now_utc: ' + now_utc);
    let weekDays = dates.getUTCDay();
    let weekDayss = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    //console.log('weekDay: ' + weekDays[weekDay]);
    let days = dates.getUTCDate();
    let returnedDays;
    if (days < 10) {
      if (days === 1) {
        returnedDays = "01";
      } else if (days === 2) {
        returnedDays = "02";
      }else if (days === 3) {
        returnedDays = "03";
      } else if (days === 4) {
        returnedDays = "04";
      } else if (days === 5) {
        returnedDays = "05";
      } else if (days === 6) {
        returnedDays = "06";
      } else if (days === 7) {
        returnedDays = "07";
      } else if (days === 8) {
        returnedDays = "08";
      } else if (days === 9) {
        returnedDays = "09";
      }
    } else {
      returnedDays = days.toString();
    }

    //console.log('returnedDay: ' + returnedDay + ' typeof(returnedDay): ' + typeof(returnedDay));
    let months = dates.getUTCMonth();
    let monthss = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //console.log("month: " + months[month]);
    let years = dates.getUTCFullYear();
    let returnedYears = years.toString();
    //console.log('year: ' + returnedYear);
    let finalResponses = weekDayss[weekDays] + ", " + returnedDays + " " + monthss[months] + " " + returnedYears + " 00:00:00 GMT";

    now = true;
/*
    res.json({
      unix: Number(timestamp),
      utc: finalResponses
    })
    */
  }
  if (req) {
    console.log('typeof(req.params.date): ' + typeof(req.params.date));
    console.log('Date: ' + req.params.date);

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
    let finalResponse = weekDays[weekDay] + ", " + returnedDay + " " + months[month] + " " + returnedYear + " 00:00:00 GMT";
    console.log('finalResponse: ' + finalResponse);
    console.log('____________');

/*
.toLocaleString('en-US', { timeZone: 'America/New_York' })
*/
    now = false;
    /*
    res.json({
      unix: Number(timestamp),
      utc: finalResponse
    });
    */
  };
  let finalResponseACTUALLY;
  if (now) {
    finalResponseACTUALLY = finalResponses;
  } else {
    finalResponseACTUALLY = finalReponse;
  }
  res.json({
    unix: Number(timestamp),
    utc: finalResponseACTUALLY
  })

});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
