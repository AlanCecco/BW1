// const ratingStars = [...document.getElementsByClassName("rating__star")];
// const ratingResult = document.querySelector(".rating__result");

// printRatingResult(ratingResult);
// function executeRating(stars, result) {
//   const starClassActive = "star";
//   const starClassUnactive = "star";
//   const starsLength = stars.length;
//   let i;
//   stars.map((star) => {
//     star.onclick = () => {
//       i = stars.indexOf(star);

//       if (star.className.indexOf(starClassUnactive) !== -1) {
//         printRatingResult(result, i + 1);
//         for (i; i >= 0; --i) stars[i].className = starClassActive;
//       } else {
//         printRatingResult(result, i);
//         for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
//       }
//     };
//   });
// }

// function printRatingResult(result, num = 0) {
//   result.textContent = `${num}/10`;
// }

// executeRating(ratingStars, ratingResult);
// let starContainer = document.querySelectorAll(".star-container");
// const submitButton = document.querySelector("#submit");
// const message = document.querySelector("#message");
// const submitSection = document.querySelector("#submit-section");
// //Events For touch and mouse
// let events = {
//   mouse: {
//     over: "click",
//   },
//   touch: {
//     over: "touchstart",
//   },
// };
// let deviceType = "";
// //Detect touch device
// const isTouchDevice = () => {
//   try {
//     //We try to create TouchEvent (it would fail for desktops and throw error)
//     document.createEvent("TouchEvent");
//     deviceType = "touch";
//     return true;
//   } catch (e) {
//     deviceType = "mouse";
//     return false;
//   }
// };
// isTouchDevice();
// starContainer.forEach((element, index) => {
//   element.addEventListener(events[deviceType].over, () => {
//     submitButton.disabled = false;
//     if (element.classList.contains("inactive")) {
//       //Fill Star
//       ratingUpdate(0, index, true);
//     } else {
//       //Regular stars (remove color)
//       ratingUpdate(index, starContainer.length - 1, false);
//     }
//   });
// });
// const ratingUpdate = (start, end, active) => {
//   for (let i = start; i <= end; i++) {
//     if (active) {
//       starContainer[i].classList.add("active");
//       starContainer[i].classList.remove("inactive");
//       starContainer[i].firstElementChild.className = "fa-star fa-solid";
//     } else {
//       starContainer[i].classList.remove("active");
//       starContainer[i].classList.add("inactive");
//       starContainer[i].firstElementChild.className = "fa-star fa-regular";
//     }
//   }
//   //Message
// };
// submitButton.addEventListener("click", () => {
//   submitSection.classList.remove("hide");
//   submitSection.classList.add("show");
//   submitButton.disabled = true;
// });
// window.onload = () => {
//   submitButton.disabled = true;
//   submitSection.classList.add("hide");
// };
