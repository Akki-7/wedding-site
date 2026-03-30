function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";

  AOS.init({
    duration: 1400,
    once: true
  });
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