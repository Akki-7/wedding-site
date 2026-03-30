function enterSite() {
  const intro = document.getElementById("intro");

  intro.style.transition = "opacity 0.8s ease";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 800);
}

// COUNTDOWN FIX
const weddingDate = new Date(2026, 3, 30).getTime();

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