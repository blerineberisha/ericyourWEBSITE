const dork = document.getElementById("dork");
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