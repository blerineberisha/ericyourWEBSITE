const dateDisplay = document.getElementById("dateDisplay");
const dayBtnsWrap = document.getElementById("dayBtnsWrap");
const correctDisplay = document.getElementById("correctDisplay");
const wrongDisplay = document.getElementById("wrongDisplay");
const statisticsBro = document.getElementById("stats");
const dork = document.getElementById("dork");
const WEEKDAYS = getWeekdaysArray();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let index = 0;
let dates = [];
let guesses = [];
let theDate = new Date(Math.random() * Date.now());
let correct = 0;
let wrong = 0;
let count = 0;
let all;
let stat;

setNewRandomDay();

dork.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("leight-mode");
  if (dork.innerText === "dork?") {
    dork.innerText = "leight?";
  } else {
    dork.innerText = "dork?";
  }
});
const partay = document.getElementById("partyyyyy");
partay.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("blink");
  if (partay.innerText === "stOOOOPpp") {
    partay.innerText = "partyyyyy";
  } else {
    partay.innerText = "stOOOOPpp";
  }
});
function getWeekdaysArray() {
  let x = new Date("11/28/2021");
  const arr = [];
  for (let i = 0; i < 7; i++) {
    x.setDate(x.getDate() + 1);
    arr.push(getWeekday(x));
  }
  return arr;
}

function getFormattedDate(date) {
  let options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("default", options);
}

function getWeekday(date) {
  options = { weekday: "long" };
  return date.toLocaleDateString("default", options);
}

for (let day of WEEKDAYS) {
  let btn = document.createElement("button");
  btn.innerHTML = day;
  btn.id = day;
  btn.className = "buttons";
  btn.onclick = () => guessDay(day);
  dayBtnsWrap.appendChild(btn);
}

function setNewRandomDay() {
  document.querySelectorAll("button.buttons").forEach((elem) => {
    elem.style.backgroundColor = "#ddd";
    elem.disabled = false;
  });
  let range = 500 * 365 * 24 * 60 * 60 * 1000;
  let center = Date.now();
  let rand = center + Math.random() * range - Math.random() * range;
  theDate = new Date(rand);
  dateDisplay.innerText = getFormattedDate(theDate);
  if (count == 10) {
    var time = document.getElementById("stopwatch");
    window.location.href =
    "challenge_result.html?time=" + getValue() + "&wrong=" + wrong + "&correct=" + correct + 
    "&date1=" + dates[0] + "&date2=" + dates[1] + "&date3=" + dates[2] + "&date4=" + dates[3] +
    "&date5=" + dates[4] + "&date6=" + dates[5] + "&date7=" + dates[6] + "&date8=" + dates[7] +
    "&date9=" + dates[8] + "&date10=" + dates[9] +
    "&guess1=" + guesses[0] + "&guess2=" + guesses[1] + "&guess3=" + guesses[2] +
    "&guess4=" + guesses[3] + "&guess5=" + guesses[4] + "&guess6=" + guesses[5] +
    "&guess7=" + guesses[6] + "&guess8=" + guesses[7] + "&guess9=" + guesses[8] +
    "&guess10=" + guesses[9];
    time.innerHTML = getValue().toString();
    stop();
  }
}

function guessDay(weekday) {
  count = count + 1;
  const correctDay = getWeekday(theDate);
  document.getElementById(correctDay).style.backgroundColor = "#2AAA8A";
  if (weekday === correctDay) {
    correct++;
  } else {
    wrong++;
    document.getElementById(weekday).style.backgroundColor = "#CD5C5C";
  }
  correctDisplay.innerText = correct;
  wrongDisplay.innerText = wrong;
  all = correct + wrong;
  stat = (correct / all) * 100;
  stat = Math.round(((stat + Number.EPSILON) * 100) / 100);
  statisticsBro.innerText = stat;
  document.querySelectorAll("button.buttons").forEach((elem) => {
    elem.disabled = true;
  });
  dates[index] = theDate.toDateString();
  guesses[index] = weekday;
  index += 1;
}

// STOPWATCH
const timer = document.getElementById("stopwatch");
var isRunning = false;
var value = 0;
var startTime = 0;
var interval;

function getValue() {
  return isRunning ? Date.now() - startTime : value;
}

isRunning = true;
startTime = Date.now() - value;
interval = setInterval(render, 1000);

function stop() {
  if (!isRunning) return;
  isRunning = false;
  value = Date.now() - startTime;
}

function reset() {
  if (isRunning) {
    startTime = Date.now();
  } else {
    value = 0;
  }
  render();
}

function lz(value) {
  return (value < 10 ? "0" : "") + value;
}

function render() {
  var val = getValue(),
    v = Math.abs(val);

  var seconds = Math.floor(v / 1000) % 60,
    minutes = Math.floor(v / 60000) % 60;
  timer.innerHTML = minutes + " min " + seconds + " s";
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
}
