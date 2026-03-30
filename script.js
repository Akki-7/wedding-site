AOS.init();

// Enter animation
function enterSite() {
  const intro = document.getElementById("intro");

  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    document.getElementById("main-content").style.display = "block";

    AOS.init({
      duration: 1200,
      once: true
    });
  }, 1000);
}

// Countdown
const weddingDate = new Date(2026, 3, 30, 0, 0, 0).getTime();
// NOTE: Month is 0-based → April = 3

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "💍 It's Wedding Day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("timer").innerHTML =
    `${days} days ${hours} hrs to go 💫`;
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

function playMusic() {
  document.getElementById("bg-music").play();
}