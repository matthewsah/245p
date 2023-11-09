let slideContainer = document.querySelector(".slide__container");
let images = document.querySelectorAll(".slide__container img");
let prevButton = document.querySelector("#prevButton");
let nextButton = document.querySelector("#nextButton");
let imgSize = images[0].clientWidth;

let counter = 1;
slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";

nextButton.addEventListener("click", () => {
  if (counter >= images.length - 1) return; // prevent the click to happen if we are at the last image
  counter = counter + 1; // add to the counter value if we clicked
  slideContainer.style.transition = "0.25s ease-in-out"; // transitioning should happen with a 0.25s long transition
  slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)"; // the slideContainer's CSS transform shall be updated upon click
});

prevButton.addEventListener("click", () => {
  if (counter <= 0) return; // prevent the click to happen if we are at the first image
  counter = counter - 1; // deduct from the counter value if we clicked
  slideContainer.style.transition = "0.25s ease-in-out"; // transitioning should happen with a 0.25s long transition
  slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)"; // the slideContainer's CSS transform shall be updated upon click
});

slideContainer.addEventListener("transitionend", () => {
  // if the current image we are at is the first clone we need to update the counter and
  // jump to the last slide without a transition
  if (images[counter].id === "firstClone") {
    slideContainer.style.transition = "0s ease-in-out";
    counter = images.length - counter;
  }
  // if the current image we are at is the last clone we need to update the counter and
  // jump to the first slide without a transition
  if (images[counter].id === "lastClone") {
    slideContainer.style.transition = "0s ease-in-out";
    counter = images.length - 2;
  }

  // we need to execute the transform
  slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
});