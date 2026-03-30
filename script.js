AOS.init();

// Enter animation
function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";
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