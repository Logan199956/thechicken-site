let score = 0;
let time = 30;
let gameRunning = false;
let highScore = localStorage.getItem("highScore") || 0;

const yard = document.getElementById("yard");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const highEl = document.getElementById("highscore");

highEl.textContent = highScore;

const birds = ["🐔","🐣","🐥","🐓"];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnChicken() {
  if (!gameRunning) return;

  const el = document.createElement("span");
  el.className = "chicken";
  el.textContent = birds[Math.floor(Math.random() * birds.length)];

  el.style.left = random(5, 95) + "%";
  el.style.top = random(5, 95) + "%";

  // 🐔 click = score
  el.onclick = () => {
    score++;
    scoreEl.textContent = score;
    el.remove();
  };

  yard.appendChild(el);

  // disappears if not clicked
  setTimeout(() => el.remove(), 1200);
}

// 🧠 game start
function startGame() {
  score = 0;
  time = 30;
  gameRunning = true;

  scoreEl.textContent = score;
  timeEl.textContent = time;

  yard.innerHTML = "";

  // ⏱️ timer
  const timer = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      gameRunning = false;

      if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
      }

      highEl.textContent = highScore;

      alert("Game Over! Score: " + score);
    }
  }, 1000);

  // 🐔 spawn loop
  const spawner = setInterval(() => {
    if (!gameRunning) {
      clearInterval(spawner);
      return;
    }
    spawnChicken();
  }, 500);
}
