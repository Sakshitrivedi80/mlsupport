document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form refresh
  document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
