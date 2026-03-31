function enterSite() {
  document.getElementById("intro").style.display = "none";
}

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("visible");
    }
  });
});

// COUNTDOWN
const weddingDate = new Date(2026, 3, 30).getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("timer").innerHTML =
    `${days} days ${hours} hrs to go`;
}, 1000);