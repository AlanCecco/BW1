<<<<<<< HEAD
// function timer() {
//   let sec = 60;
//   let timer = setInterval(function () {
//     document.getElementById("safeTimerDisplay").innerHTML = "00:" + sec;
//     sec--;
//     if (sec < 0) {
//       clearInterval(timer);
//     }
//   }, 1000);
// }
// window.onload = function () {
//   timer();
// };
=======
>>>>>>> Fidan
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
<<<<<<< HEAD
=======

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
// let currQuestion = 0;
// let score = 0;

// function loadQues() {
//   const question = document.getElementById("ques");
//   const opt = document.getElementById("opt");

//   question.textContent = questions[currQuestion].q;
//   opt.innerHTML = "";

//   for (let i = 0; i < questions[currQuestion].a.length; i++) {
//     const choicesdiv = document.createElement("div");
//     const choice = document.createElement("input");
//     const choiceLabel = document.createElement("label");

//     choice.type = "radio";
//     choice.name = "answer";
//     choice.value = i;

//     choiceLabel.textContent = questions[currQuestion].a[i].text;

//     choicesdiv.appendChild(choice);
//     choicesdiv.appendChild(choiceLabel);
//     opt.appendChild(choicesdiv);
//   }
// }

// loadQues();

// function loadScore() {
//   const totalScore = document.getElementById("score");
//   totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
// }

// function nextQuestion() {
//   if (currQuestion < questions.length - 1) {
//     currQuestion++;
//     loadQues();
//   } else {
//     document.getElementById("opt").remove();
//     document.getElementById("ques").remove();
//     document.getElementById("btn").remove();
//     loadScore();
//   }
// }

// function checkAns() {
//   const selectedAns = parseInt(
//     document.querySelector('input[name="answer"]:checked').value
//   );

//   if (questions[currQuestion].a[selectedAns].correct_answer) {
//     score++;
//     console.log("Correct");
//     nextQuestion();
//   } else {
//     nextQuestion();
//   }
// }
// window.onload = function () {
//   checkAns();
//   nextQuestion();
//   loadScore();
//   loadQues();
// };
function risultato() {
  //prelevo il valore scelto tra le singole domande
  //questa volta è un vettore di 3 elementi, non posso andare per id ma name
  let domanda1 = document.getElementsByName("domanda1");
  let domanda2 = document.getElementsByName("domanda2");
  let domanda3 = document.getElementsByName("domanda3");

  var punteggio = 0;

  //svuoto i messaggi delle precedenti partite
  document.getElementById("risposta1").innerHTML = "";
  document.getElementById("risposta2").innerHTML = "";
  document.getElementById("risposta3").innerHTML = "";
  document.getElementById("risposta4").innerHTML = "";
  document.getElementById("risposta5").innerHTML = "";
  document.getElementById("risposta6").innerHTML = "";
  document.getElementById("risposta7").innerHTML = "";
  document.getElementById("risposta8").innerHTML = "";
  document.getElementById("risposta9").innerHTML = "";

  //controllo le risposte
  //domanda 1 - risposta esatta è risposta2
  let risposta;

  if (domanda1[0].checked == true) {
    risposta = document.getElementById("risposta1");
    risposta.style.color = "red";
    risposta.innerHTML = "sbagliato";
  }

  if (domanda1[1].checked == true) {
    risposta = document.getElementById("risposta2");
    risposta.style.color = "green";
    risposta.innerHTML = "esatto";

    punteggio = punteggio + 1;
  }

  if (domanda1[2].checked == true) {
    risposta = document.getElementById("risposta3");
    risposta.style.color = "red";
    risposta.innerHTML = "sbagliato";
  }

  //domanda 2 - risposta esatta è risposta6
  if (domanda2[0].checked == true) {
    risposta = document.getElementById("risposta4");
    risposta.style.color = "red";
    risposta.innerHTML = "sbagliato";
  }

  if (domanda2[1].checked == true) {
    risposta = document.getElementById("risposta5");
    risposta.style.color = "red";
    risposta.innerHTML = "sbagliato";
  }

  if (domanda2[2].checked == true) {
    risposta = document.getElementById("risposta6");
    risposta.style.color = "green";
    risposta.innerHTML = "esatto";

    punteggio = punteggio + 1;
  }

  //domanda 3 - risposta esatta è risposta7
  if (domanda3[0].checked == true) {
    risposta = document.getElementById("risposta7");
    risposta.style.color = "green";
    risposta.innerHTML = "esatto";

    punteggio = punteggio + 1;
  }

  if (domanda3[1].checked == true) {
    risposta = document.getElementById("risposta8");
    risposta.style.color = "red";
    risposta.innerHTML = "sbagliato";
  }

  if (domanda3[2].checked == true) {
    risposta = document.getElementById("risposta9");
    risposta.style.color = "red";
    risposta.innerHTML = "sbagliato";
  }

  //visualizzo il risultato
  let casella = document.getElementById("risultato");
  let punti = document.getElementById("punteggio");

  punti.innerHTML = "Punti " + punteggio;
  if (punteggio > 6) {
    casella.style.color = "green";
    casella.innerHTML = "HAI VINTO";
  } else {
    casella.style.color = "red";
    casella.innerHTML = "HAI PERSO";
  }
}
>>>>>>> Fidan
