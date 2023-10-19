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

var starRatings = document.querySelectorAll('.star-rating');
 for (var index = 0; index < starRatings.length; index++) {
     var starRating   = starRatings[index],
         fullStars    = starRating.querySelector('.full-stars'),
         rating       = parseFloat(starRating.dataset.rating) || 0,
         percentWidth = rating * 20;
  
 }