// ENTER TRANSITION
function enterSite() {
  const intro = document.getElementById("intro");

  intro.style.transition = "opacity 0.8s ease";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
}

// SCROLL REVEAL
const texts = document.querySelectorAll(".reveal-text");

function revealOnScroll() {
  texts.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight * 0.8) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// COUNTDOWN
const weddingDate = new Date(2026, 3, 30).getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "Wedding Day";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("timer").innerHTML =
    `${days} days ${hours} hrs to go`;
}, 1000);