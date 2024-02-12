const textBlinker = document.getElementById("blink");
const startImage = document.querySelector("#firstInfo");
const gameDiv = document.querySelector(".game");
let content;

const blink_speed = 1000;
let blinkInterval = setInterval(function () {
  textBlinker.style.visibility =
    textBlinker.style.visibility === "hidden" ? "" : "hidden";
}, blink_speed);

function startGame() {
  startImage.remove();
  clearInterval(blinkInterval);
  level1();
}

textBlinker.onclick = startGame;

function nextLevel() {
  if (content) {
    content.remove(); // Elimină elementul 'content' dacă există
  } else {
    console.error("Elementul 'content' nu a fost găsit.");
  }
}

function level1() {
  content = document.createElement("div");
  let firstText = document.createElement("div");
  let startButton = document.createElement("button");

  content.classList.add("content");
  startButton.textContent = "Start the game";
  startButton.classList.add("btn", "btn-outline-primary", "startButtonGame");
  startButton.onmouseover = function () {
    let maxX = window.innerWidth - startButton.offsetWidth;
    let maxY = window.innerHeight - startButton.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    startButton.style.position = "absolute";
    startButton.style.left = randomX + "px";
    startButton.style.top = randomY + "px";
  };

  firstText.classList.add("title");
  firstText.innerHTML =
    "First thing first<br> click the <div id='lvl2'>button</div> to start the game ";

  if (gameDiv) {
    gameDiv.appendChild(content);
    content.appendChild(firstText);
    content.appendChild(startButton);

   
    let nextLevel = document.querySelector("#lvl2");
    if (nextLevel) {
      nextLevel.onclick = level2; 
    } else {
      console.error("Elementul 'lvl2' nu a fost găsit.");
    }
  } else {
    console.error("Div-ul 'game' nu a fost găsit.");
  }
}

function level2() {
  nextLevel();
}
