const correctDisplay = document.getElementById("correctDisplay");
const wrongDisplay = document.getElementById("wrongDisplay");
const statisticsBro = document.getElementById("stats");
const timeRes = document.getElementById("stopwatchResult");
const message = document.getElementById("privmessage");
const partay = document.getElementById("partyyyyy");
const avgtime = document.getElementById("avg");
const solutions = document.getElementById("solutions");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const date3 = document.getElementById("date3");
const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
const guess1 = document.getElementById("guess1");
const guess2 = document.getElementById("guess2");
const guess3 = document.getElementById("guess3");

let queryString = window.location.search;
const search = new URLSearchParams(queryString);

dork.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("leight-mode");
  if (dork.innerText === "dork?") {
    dork.innerText = "leight?";
  } else {
    dork.innerText = "dork?";
  }
});

partay.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("blink");
  if (partay.innerText === "stOOOOPpp") {
    partay.innerText = "partyyyyy";
  } else {
    partay.innerText = "stOOOOPpp";
  }
});

const time = search.get("time");
const wrong = search.get("wrong");
const correct = search.get("correct");
var dat1 = search.get("date1");
var dat2 = search.get("date2");
var dat3 = search.get("date3");
var gues1 = search.get("guess1");
var gues2 = search.get("guess2");
var gues3 = search.get("guess3");

date1.innerText = dat1;
guess1.innerText = gues1;

date2.innerText = dat2;
guess2.innerText = gues2;

date3.innerText = dat3;
guess3.innerText = gues3;

let stat = (correct / 3) * 100;
stat = Math.round(((stat + Number.EPSILON) * 100) / 100);
statisticsBro.innerText = stat;
let min = Math.floor((time / 1000 / 60) << 0);
let sec = Math.floor((time / 1000) % 60);
timeRes.innerText = min + " min " + sec + " s";
wrongDisplay.innerText = wrong;
correctDisplay.innerText = correct;
let avg = time/3;
let min1 = Math.floor((avg / 1000 / 60) << 0);
let sec1 = ((avg / 1000) % 60);
sec1 = sec1.toFixed(2);
avgtime.innerText = sec1 + " s"

function aeagen() {
  window.location.href = "3date_challenge.html";
}
if (parseInt(wrong) >= 5) {
  message.innerText = "dude das wär nödemal en 4er. machs besser";
}
if (parseInt(wrong) == 4) {
  message.innerText = "ein idiot sagte mal '4 gewinnt' oder so";

}
if (parseInt(wrong) <= 3) {
  message.innerText = "well done bitch";
}
