var seconds = 00;
var tens = 00;
var addTens = document.getElementById("tens");//variable used to change the tens
var addSeconds = document.getElementById("seconds");//variable used to change the seconds
var buttonStart = document.getElementById("button-start");//to get start button element
var buttonStop = document.getElementById("button-stop");//to get stop button element
var buttonReset = document.getElementById("button-reset");//to get reset button element
var interval; // to store timer values

// this function will run when click on start

function startTimer() {
  tens++;//increment tens

  if (tens < 9) {
    addTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    addTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    addSeconds.innerHTML = "0" + seconds;
    tens = 0;
    addTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    addSeconds.innerHTML = seconds;
  }
}

buttonStart.onclick = function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  addSeconds.innerHTML = seconds;
  addTens.innerHTML = tens;
};