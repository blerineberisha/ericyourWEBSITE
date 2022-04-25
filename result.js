const correctDisplay = document.getElementById("correctDisplay");
const wrongDisplay = document.getElementById("wrongDisplay");
const statisticsBro = document.getElementById("stats");
const timeRes = document.getElementById("stopwatchResult");
const message = document.getElementById("privmessage");
dork.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("leight-mode");
  if (dork.innerText === "dork?") {
    dork.innerText = "leight?";
  } else {
    dork.innerText = "dork?";
  }
});

const queryString = window.location.search;
const search = new URLSearchParams(queryString);
const time = search.get("time");
const wrong = search.get("wrong");
const correct = search.get("correct");
let stat = (correct / 10) * 100;
stat = Math.round(((stat + Number.EPSILON) * 100) / 100);
statisticsBro.innerText = stat;
let min = Math.floor((time / 1000 / 60) << 0);
let sec = Math.floor((time / 1000) % 60);
timeRes.innerText = min + " min " + sec + " s";
wrongDisplay.innerText = wrong;
correctDisplay.innerText = correct;

function aeagen() {
  window.location.href = "challenge.html";
}
if (parseInt(wrong) >= 5) {
  message.innerText = "dude das wär nödemal en 4er. machs besser";
}
if (parseInt(wrong) <= 3) {
  message.innerText = "well done bitch";
}
