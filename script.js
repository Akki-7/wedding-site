AOS.init();

// Enter animation
function enterSite() {
  const intro = document.getElementById("intro");
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    document.getElementById("main-content").style.display = "block";
    AOS.init();
  }, 800);
}

// Countdown
const weddingDate = new Date("Dec 12, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("timer").innerHTML =
    `${days} days ${hours} hrs to go 💍`;
}, 1000);

// 🌸 Floating petals
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (3 + Math.random() * 5) + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}

setInterval(createPetal, 300);