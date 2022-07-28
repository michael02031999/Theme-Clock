let modeButton = document.getElementById("modeButton");
let body = document.getElementsByTagName("body");
console.log(body[0]);

modeButton.addEventListener("click", toggleModes);

let count = 0;

function toggleModes() {
  count++;
  if (count == 1) {
    modeButton.innerHTML = "Light mode";
    modeButton.style.backgroundColor = "white";
    modeButton.style.color = "black";
    body[0].style.backgroundColor = "black";
    minuteHand.style.backgroundColor = "white";
    hourHand.style.backgroundColor = "white";
    hour2.style.color = "white";
    minute.style.color = "white";
    AMorPM.style.color = "white";
    dateNumber.style.backgroundColor = "white";
    dateNumber.style.color = "rgb(51, 51, 51)";
  }
  if (count == 2) {
    count = 0;
    modeButton.innerHTML = "Dark Mode";
    modeButton.style.backgroundColor = "black";
    modeButton.style.color = "white";
    body[0].style.backgroundColor = "white";
    minuteHand.style.backgroundColor = "black";
    hourHand.style.backgroundColor = "black";
    hour2.style.color = "black";
    minute.style.color = "black";
    AMorPM.style.color = "black";
    dateNumber.style.backgroundColor = "black";
    dateNumber.style.color = "white";
  }
}

let digitalClock = new Date();

let secondHand = document.getElementById("secondHand");
let minuteHand = document.getElementById("minuteHand");
let hourHand = document.getElementById("hourHand");

let minute = document.getElementById("minute");
let hour2 = document.getElementById("hour");
let AMorPM = document.getElementById("AMorPM");

let day = document.getElementById("day");
let month = document.getElementById("month");
let dateNumber = document.getElementById("dateNumber");

let arrayOfDays = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

let monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

console.log(digitalClock.getMinutes());
console.log(monthNames[digitalClock.getMonth()]);
console.log(arrayOfDays[digitalClock.getDay()]);

day.innerHTML = arrayOfDays[digitalClock.getDay()];
month.innerHTML = monthNames[digitalClock.getMonth()];
dateNumber.innerHTML = digitalClock.getDate();

let allTimeRelatedThingsSeconds = new Date();
let seconds = allTimeRelatedThingsSeconds.getSeconds();
let secondsTimesDegrees = seconds * 6;
let rotateDegrees2 =
  "translate(-50%, -50%) rotate(" + secondsTimesDegrees + "deg" + ")";

secondHand.style.transform = rotateDegrees2;

let allTimeRelatedThings = new Date();
let minutes = allTimeRelatedThings.getMinutes();
let minutesTimesDegrees = minutes * 6;
let rotateDegrees =
  "translate(-50%, -50%) rotate(" + minutesTimesDegrees + "deg" + ")";

if (minutes < 10) {
  minute.innerHTML = "0".concat(minutes);
} else if (minutes >= 10) {
  minute.innerHTML = minutes;
}
minuteHand.style.transform = rotateDegrees;

let allTimeRelatedThingsHours = new Date();
let hour = allTimeRelatedThingsHours.getHours();

let hoursTimesDegrees = hour * 30;
let rotateDegrees3 =
  "translate(-50%, -50%) rotate(" + hoursTimesDegrees + "deg" + ")";

if (hour > 12) {
  hour2.innerHTML = hour - 12 + ":";
  AMorPM.innerHTML = "PM";
} else {
  hour2.innerHTML = hour + ":";
  AMorPM.innerHTML = "AM";
}
hourHand.style.transform = rotateDegrees3;

setInterval(function () {
  let allTimeRelatedThings = new Date();
  let seconds = allTimeRelatedThings.getSeconds();
  let secondsTimesDegrees = seconds * 6;
  let rotateDegrees2 = "";

  if (secondsTimesDegrees != 0) {
    rotateDegrees2 =
      "translate(-50%, -50%) rotate(" + secondsTimesDegrees + "deg" + ")";
    secondHand.style.transform = rotateDegrees2;
  } else if (secondsTimesDegrees == 0) {
    rotateDegrees2 = "translate(-50%, -50%) rotate(" + "-0" + "deg" + ")";
    secondHand.style.transform = rotateDegrees2;
    secondHand.style.transition = "all 0.5s";
  }

  if (seconds == 0) {
    /*rotateDegrees2 = "translate(-50%, -50%) rotate(" + "-360" + "deg" + ")";
    secondHand.style.transform = rotateDegrees2;*/

    let allTimeRelatedThings = new Date();
    let minutes = allTimeRelatedThings.getMinutes();
    let minutesTimesDegrees = minutes * 6;
    let rotateDegrees =
      "translate(-50%, -50%) rotate(" + minutesTimesDegrees + "deg" + ")";

    if (minutes < 10) {
      minute.innerHTML = "0".concat(minutes);
    } else if (minutes >= 10) {
      minute.innerHTML = minutes;
    }

    minuteHand.style.transform = rotateDegrees;

    setInterval(function () {
      let allTimeRelatedThings = new Date();
      let minutes = allTimeRelatedThings.getMinutes();
      let minutesTimesDegrees = minutes * 6;
      let rotateDegrees =
        "translate(-50%, -50%) rotate(" + minutesTimesDegrees + "deg" + ")";

      minuteHand.style.transform = rotateDegrees;

      if (minutes == 0) {
        let allTimeRelatedThingsHours = new Date();
        let hour = allTimeRelatedThingsHours.getHours();
        let hoursTimesDegrees = hour * 30;
        let rotateDegrees3 =
          "translate(-50%, -50%) rotate(" + hoursTimesDegrees + "deg" + ")";

        hourHand.style.transform = rotateDegrees3;

        setInterval(function () {
          let allTimeRelatedThingsHours = new Date();
          let hour = allTimeRelatedThingsHours.getHours();

          let hoursTimesDegrees = hour * 30;
          let rotateDegrees3 =
            "translate(-50%, -50%) rotate(" + hoursTimesDegrees + "deg" + ")";
          if (hour > 12) {
            hour2.innerHTML = hour - 12 + ":";
            AMorPM.innerHTML = "PM";
          } else {
            hour2.innerHTML = hour + ":";
            AMorPM.innerHTML = "AM";
          }

          if (hour == 24) {
            day.innerHTML = arrayOfDays[digitalClock.getDay()];
            dateNumber.innerHTML = digitalClock.getDate();
            month.innerHTML = monthNames[digitalClock.getMonth()];
          }

          hourHand.style.transform = rotateDegrees3;
        }, 3600000);
      }
    }, 60000);
  }
}, 1000);
