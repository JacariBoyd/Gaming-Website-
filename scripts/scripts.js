const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//Button Listeners
nextBtn.addEventListener("click", () => {
  event.preventDefault();
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  event.preventDefault();
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

// function handlenextlButton(evt) {
//   setStatusMessage("next Button pressed!!...");
//   navigator.mediaDevices
//     .getUserInput
//     .then((chatStream) => {
//       selfViewElem.srcObject = chatStream;
//       chatStream
//         .getTracks()
//         .forEach((track) => myPeerConnection.addTrack(track, chatStream));
//       setStatusMessage("Connected");
//     })
//     .catch((err) => {
//       setStatusMessage("Failed to connect");
//     });
// }
