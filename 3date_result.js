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
console.log(avgtime.innerText);

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