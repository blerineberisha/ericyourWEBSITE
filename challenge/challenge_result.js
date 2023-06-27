const correctDisplay = document.getElementById("correctDisplay");
const wrongDisplay = document.getElementById("wrongDisplay");
const statisticsBro = document.getElementById("stats");
const timeRes = document.getElementById("stopwatchResult");
const message = document.getElementById("privmessage");
const partay = document.getElementById("partyyyyy");
const avgtime = document.getElementById("avg");

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
var dat4 = search.get("date4");
var dat5 = search.get("date5");
var dat6 = search.get("date6");
var dat7 = search.get("date7");
var dat8 = search.get("date8");
var dat9 = search.get("date9");
var dat10 = search.get("date10");

var gues1 = search.get("guess1");
var gues2 = search.get("guess2");
var gues3 = search.get("guess3");
var gues4 = search.get("guess4");
var gues5 = search.get("guess5");
var gues6 = search.get("guess6");
var gues7 = search.get("guess7");
var gues8 = search.get("guess8");
var gues9 = search.get("guess9");
var gues10 = search.get("guess10");

date1.innerText = dat1;
guess1.innerText = gues1;

date2.innerText = dat2;
guess2.innerText = gues2;

date3.innerText = dat3;
guess3.innerText = gues3;

date4.innerText = dat4;
guess4.innerText = gues4;

date5.innerText = dat5;
guess5.innerText = gues5;

date6.innerText = dat6;
guess6.innerText = gues6;

date7.innerText = dat7;
guess7.innerText = gues7;

date8.innerText = dat8;
guess8.innerText = gues8;

date9.innerText = dat9;
guess9.innerText = gues9;

date10.innerText = dat10;
guess10.innerText = gues10;

let stat = (correct / 10) * 100;
stat = Math.round(((stat + Number.EPSILON) * 100) / 100);
statisticsBro.innerText = stat;
let min = Math.floor((time / 1000 / 60) << 0);
let sec = Math.floor((time / 1000) % 60);
timeRes.innerText = min + " min " + sec + " s";
wrongDisplay.innerText = wrong;
correctDisplay.innerText = correct;
let avg = time/10;
let min1 = Math.floor((avg / 1000 / 60) << 0);
let sec1 = ((avg / 1000) % 60);
sec1 = sec1.toFixed(2);
avgtime.innerText = sec1 + " s"
console.log(avgtime.innerText);

function aeagen() {
  window.location.href = "challenge.html";
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
