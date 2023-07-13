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

const partay = document.getElementById("partyyyyy")
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
  statisticsBro.innerText = stat.toString();
  document.querySelectorAll("button.buttons").forEach((elem) => {
    elem.disabled = true;
  });
}