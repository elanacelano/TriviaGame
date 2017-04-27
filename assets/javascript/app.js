function check() {

    var question1 = document.TriviaGame.question1.value;
    var question2 = document.TriviaGame.question2.value;
    var question3 = document.TriviaGame.question3.value;
    var correct = 0;

    if (question1 == "Gothom City") {
        correct++;
    }
    if (question2 == "Scooby Doo") {
        correct++;
    }
    if (question3 == "Seven") {
        correct++;
    }

    var messages = ["Great job!", "Well done!", "That's okay, you will do better next time."]
    var range;

    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }
  }
    function Stopwatch() {
        var time = 0;
        var interval;
        var offset;
      }
        function update() {
            if (this.isOn) {
                time += delta();
            }
            var formattedTime = timeFormatter(time);
            elem.textContent = formattedTime;
        }

        function delta() {
            var now = Date.now();
            var timePassed = now - offset;
            offset = now;
            return timePassed;
        }

        function timeFormatter(timeInMilliseconds) {
            var time = new Date(timeInMilliseconds);
            var minutes = time.getMinutes().toString();
            var seconds = time.getSeconds().toString();
            var milliseconds = time.getMilliseconds().toString();


            if (minutes.length < 2) {
                minutes = "0" + minutes;
            }
            if (second.length < 2) {
                seconds = "0" + seconds;
            }
            while (milliseconds.length < 3) {
                seconds = "0" + milliseconds;
            }
            return minutes + ":" + seconds + "." + milliseconds;
        }

        function start() {
            if (!this.isOn) {
                interval = setInterval(update, 10);
                offset = Date.now();
                this.isOn = true;
            }
        };
        this.stop = function() {
            if (this.isOn) {
                clearInterval(interval);
                interval = null;
                this.isOn = false;
            }
        };
        this.reset = function() {
            if (!this.isOn) {
                time = 0;
                update();
            };
        }
        var time = document.getElementById("time");
        var timer = document.getElementById("timer");
        var toggleBtn = document.getElementById("toggle");
        var resetBtn = document.getElementById("reset");

    function start1() {
        start();
        toggleBtn.textContent = "Stop";
      console.log("HI");
    }

    function stop() {
        start();
        toggleBtn.textContent = "Start";
    }
    $("#toggle").on("click", function(){
        start1();
    })
    
    // toggleBtn.addEventListener("click", function() {
    //     console.log("Hello!!!!!!")
    //     // (watch.isOn) ? stop(): start();
    // });

    // resetBtn.addEventListener("click", function() {
    //     watch.reset();
    // });

    // documentGetElementById("after_submit").style.visibility = "visible";
    // documentGetElementById("number_correct").inner.HTML = "You got " + correct + " correct.";
    // documentGetElementById("message").inner.HTML = message[range];
