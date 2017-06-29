//global array, easy to modify
var message = [
  {id:0, startTime:6, endTime:7, text:"Wake-Up Time", image:"http://bit.ly/2mdt7R1"},
  {id:1, startTime:8, endTime:11, text:"Good Morning", image:"http://bit.ly/2lyNStw"},
  {id:2, startTime:12, endTime:12, text:"Lunch Time", image:"http://bit.ly/2mZI7SF"},
  {id:3, startTime:13, endTime:15, text:"Good Afternoon", image:"http://bit.ly/2mdA7NK"},
  {id:4, startTime:16, endTime:16, text:"Afternoon Nap", image:"http://bit.ly/2mQB0PR"},
  {id:5, startTime:17, endTime:19, text:"Good Evening", image:"http://bzfd.it/2lyK9Mx"},
  {id:6, startTime:20, endTime:23, text:"Party Time", image:"http://bit.ly/2lyRDiG"},
  {id:7, startTime:0, endTime:5, text:"Pajama Time", image:"http://bit.ly/1SqCIBi"} //between 12:01am-5:59am
  ];

//global objects
var btn = document.getElementById("partyTimeButton");
var pageText= document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var wakeUp = document.getElementById("wakeUpTimeSelector");
var lunch = document.getElementById("lunchTimeSelector");
var nap = document.getElementById("napTimeSelector");
var isPartyTime = false; //global boolean for Party Time Button

//click and change functions
var clickPartyTime = function() {
  if(!isPartyTime) {
    isPartyTime = true;
    partyTime();
  } else {
    isPartyTime = false;
    partyTime();
  }
}
var wakeUpEvent = function() {
  message[0].startTime = wakeUp.value;
  message[0].endTime = wakeUp.value;
}
var lunchEvent = function() {
  message[2].startTime = lunch.value;
  message[2].endTime = lunch.value;
}
var napEvent = function() {
  message[4].startTime = nap.value;
  message[4].endTime = nap.value;
}

//called every second to update clock display/image/text
var updateClock = function() {
  var time = new Date().getHours();
  var x; //index for message array
  var i=-1; //to start do-while loop - only 6 lines of code

  do {
    i++;
  }
  while (!(time>=message[i].startTime && time<=message[i].endTime));
  x=i;
  debugger;
  partyTime();

  function partyTime() {
    if(message[x].text==="Party Time" || isPartyTime) {
      btn.innerHTML = "PARTY TIME!";
      btn.style.background = "#222";
      lolcat.src = message[6].image;
      pageText.innerHTML = message[6].text;
    } else {
      btn.innerHTML = "Party Over :("
      btn.style.background = "#0A8DAB";
      lolcat.src = message[x].image;
      pageText.innerHTML = message[x].text;
    }
  }

  var showCurrentTime = function() {
    // display the string on the webpage
    var clock= document.getElementById('clock');

    var currentTime = new Date();
    var noon = 12;
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerHTML = clockTime;
  };
  showCurrentTime();
}

setInterval( updateClock, 1000);
btn.addEventListener("click", clickPartyTime);
wakeUp.addEventListener("change", wakeUpEvent);
lunch.addEventListener("change", lunchEvent);
nap.addEventListener("change", napEvent);
