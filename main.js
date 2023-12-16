document.querySelector("h2").addEventListener("click", function () {
  document.querySelector(".birthdayCard").classList.toggle("open");
  document.querySelector(".overlay").classList.toggle("h2-clicked");
});
