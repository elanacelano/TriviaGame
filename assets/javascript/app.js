window.onload = function() {
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
  $("#lap").on("click", stopwatch.start);
};

var count = 0;
var clearTime;
var seconds = 0;
var clearState;
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// Our stopwatch object
var stopwatch = {

  time: 0,
  lap: 1,

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").html("00:00");

    // DONE: Empty the "laps" div.
    $("#laps").html("");
  },
  start: function() {

    // DONE: Use setInterval to start the count here.
    intervalId = setInterval(stopwatch.count, 1000);
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here.
    clearInterval(intervalId);
  },
timeConverter: function(time) {

    var minutes = Math.floor(time / 60);
    var seconds = time - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};  
function width(){
   return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
}
function height(){
   return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
}

