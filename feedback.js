document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("track");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const dotsContainer = document.getElementById("dots");

  let current = 0;
  let autoSlide;

  // create dots
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      current = i;
      update();
      restartAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  function next() {
    current = (current + 1) % slides.length;
    update();
  }

  function prev() {
    current = (current - 1 + slides.length) % slides.length;
    update();
  }

  nextBtn.addEventListener("click", () => {
    next();
    restartAutoSlide();
  });
  prevBtn.addEventListener("click", () => {
    prev();
    restartAutoSlide();
  });

  function startAutoSlide() {
    autoSlide = setInterval(next, 3000);
  }

  function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  update();
  startAutoSlide();
});
