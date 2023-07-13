const dateDisplay = document.getElementById("dateDisplay");
const dayBtnsWrap = document.getElementById("dayBtnsWrap");
const givenDay = document.getElementById("givenDay");
const correctDisplay = document.getElementById("correctDisplay");
const wrongDisplay = document.getElementById("wrongDisplay");
const statisticsBro = document.getElementById("stats");
const dork = document.getElementById("dork");
const WEEKDAYS = getWeekdaysArray();
let correct = 0;
let wrong = 0;
let count = 0;
let all;
let stat;

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
function getWeekday(date) {
    options = { weekday: "long" };
    return date.toLocaleDateString("default", options);
}

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
    return Date.parse(date.toLocaleDateString("default", options));
}

function generateRandomDate() {
    from = new Date(1500, 1, 1)
    to = new Date(2500, 12, 31)
    date = new Date(from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
    return Date.parse(date);
}


randomDates = [generateRandomDate(), generateRandomDate(), generateRandomDate()];

function getThreeDates() {
    arr = [];
    console.log(Array.isArray(arr))
    date1 = new Date(generateRandomDate());
    date2 = new Date(generateRandomDate());
    date3 = new Date(generateRandomDate());
    if (getWeekday(date1) == getWeekday(date2) || getWeekday(date1) == getWeekday(date3) || getWeekday(date2) == getWeekday(date3)) {
        date1 = new Date(generateRandomDate());
        date2 = new Date(generateRandomDate());
        date3 = new Date(generateRandomDate());
    } else {
        arr.push(date1, date2, date3);
        console.log(arr)
    }
    return arr;
}

let weekday = getThreeDates();
while (weekday.length == 0) {
    weekday = getThreeDates();
}

for (let date of weekday) {
    let btn = document.createElement("button");
    btn.id = getWeekday(date);
    console.log(btn.id)
    btn.innerHTML = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
    btn.className = "buttons";
    btn.onclick = () => guessDay(date);
    dayBtnsWrap.appendChild(btn);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pickRandomDay() {
    magicNum = randomIntFromInterval(0, 2)
    magicDay = getWeekday(weekday[magicNum])
    givenDay.innerText = magicDay
    console.log(magicDay)
    return magicDay;
}

pickRandomDay();

function setNewRandomDay() {
    dayBtnsWrap.innerHTML = "";
    document.querySelectorAll("button.buttons").forEach((elem) => {
        elem.style.backgroundColor = "#ddd";
        elem.disabled = false;
    });
    weekday = getThreeDates();
    while (weekday.length == 0) {
        weekday = getThreeDates();
    }
    for (let date of weekday) {
        let btn = document.createElement("button");
        btn.id = getWeekday(date);
        btn.innerHTML = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
        btn.className = "buttons";
        btn.onclick = () => { 
            guessDay(date); 
        }
        dayBtnsWrap.appendChild(btn);
    }
    pickRandomDay();
}

function guessDay(weekday) {
    const correctDay = pickRandomDay();
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