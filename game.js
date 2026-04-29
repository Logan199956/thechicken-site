document.addEventListener("DOMContentLoaded", () => {

  const yard = document.getElementById("yard");
  const spawnBtn = document.getElementById("spawn");
  const spawn5Btn = document.getElementById("spawn5");
  const clearBtn = document.getElementById("clear");

  const birds = ["🐔","🐣","🐥","🐓"];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function spawnChicken() {
    const el = document.createElement("span");
    el.className = "chicken";
    el.textContent = birds[Math.floor(Math.random() * birds.length)];

    el.style.left = random(5, 95) + "%";
    el.style.top = random(5, 95) + "%";

    el.onclick = () => el.remove();

    yard.appendChild(el);

    setTimeout(() => el.remove(), 2000);
  }

  spawnBtn.onclick = spawnChicken;
  spawn5Btn.onclick = () => {
    for (let i = 0; i < 5; i++) spawnChicken();
  };
  clearBtn.onclick = () => yard.innerHTML = "";

});
