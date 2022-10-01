const mainContainer = document.querySelector(".wrapper");
const thanksContainer = document.querySelector(".thanks_container");
const submitRating = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate_again");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

submitRating.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});
rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

ratings.forEach((rate) => {
  rate.addEventListener("click", () => {
    actualRating.innerHTML = rate.innerHTML;
  });
});
