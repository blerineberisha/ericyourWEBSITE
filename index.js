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