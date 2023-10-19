let totalQuestions = 0;

let correct_answer = document.getElementById("correctPercentage");
let wrong_answer = document.getElementById("incorrectPercentage");
let correct_numbers = document.getElementById("correctNumbers");
let incorrect_numbers = document.getElementById("incorrectNumbers");

window.onload = () => {
  let data = localStorage.getItem("questions");
  let questions = JSON.parse(data);

  let ca = 0;
  let ia = 0;

  totalQuestions = questions.length;
  for (const element of questions) {
    let correctAnswer = element.correct_answer;
    let userAnswer = element.user_answer;
    if (correctAnswer == userAnswer) {
      ca += 1;
    } else {
      ia += 1;
    }
  }

  correct_numbers.innerHTML = ca + "/" + totalQuestions;
  incorrect_numbers.innerHTML = ia + "/" + totalQuestions;

  let correct_percentage = (ca / totalQuestions) * 100;
  let wrong_percentage = (ia / totalQuestions) * 100;
  correct_answer.innerHTML = correct_percentage + "%";
  wrong_answer.innerHTML = wrong_percentage + "%";
};
