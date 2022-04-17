const dateDisplay = document.getElementById("dateDisplay");
const dayBtnsWrap = document.getElementById("dayBtnsWrap");
const correctDisplay = document.getElementById("correctDisplay");
const wrongDisplay = document.getElementById("wrongDisplay");
const statisticsBro = document.getElementById("stats");
const dork = document.getElementById("dork");
const WEEKDAYS = getWeekdaysArray();
let theDate = new Date(Math.random() * Date.now());
let correct = 0;
let wrong = 0;
let count = 0;

dork.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (dork.innerText === "dork?") {
    dork.innerText = "leight?";
  } else {
    dork.innerText = "dork?";
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
  count = count + 1;
}

setNewRandomDay();
function guessDay(weekday) {
  const correctDay = getWeekday(theDate);
  console.log(correctDay);
  document.getElementById(correctDay).style.backgroundColor = "#2AAA8A";
  if (weekday === correctDay) {
    correct++;
  } else {
    wrong++;
    document.getElementById(weekday).style.backgroundColor = "#CD5C5C";
  }
  correctDisplay.innerText = correct;
  wrongDisplay.innerText = wrong;
  let all = correct + wrong;
  let stat = (correct / all) * 100;
  stat = Math.round(((stat + Number.EPSILON) * 100) / 100);
  statisticsBro.innerText = stat.toString();
  document.querySelectorAll("button.buttons").forEach((elem) => {
    elem.disabled = true;
  });
}

if (count == 10) {
  window.location.replace("./result.html");
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

function start() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now() - value;
  interval = setInterval(render, 1000);
}

function stop() {
  if (!isRunning) return;

  isRunning = false;
  value = Date.now() - startTime;
  clearInterval(interval);
  render();
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
