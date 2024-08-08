const quizData = [
  {
    question: "What is the capital of  Nigeria?",
    options: ["Lagos", "Abuja", "Berlin", "Madrid"],
    correct: "Abuja",
  },
  {
    question: "In Nigeria, democracy day is now celebrated on?",
    options: ["May 12", "May 29", "July 12", "June 12"],
    correct: "June 12",
  },
  {
    question: "Who was the first woman to drive a car?",
    options: [
      "Mrs Remi Tinubu",
      "Mrs. Olufunmilayo Ramsome Kuti",
      "Mrs Fela",
      "Mrs Maryam Babagida",
    ],
    correct: "Mrs. Olufunmilayo Ramsome Kuti",
  },
  {
    question: "Who was the first indigenous chartered accountant in Nigeria?",
    options: [
      "Alhaji Razak",
      "Nnamdi Okwuadigbo",
      "Joy Adewuyi",
      "Akintola Williams",
    ],
    correct: "Akintola Williams",
  },
  {
    question: "Who was the first indigenous lawyer in Nigeria?",
    options: [
      "Femi Falana",
      "Charles Oputa",
      "Sapara Williams",
      "Abimbola Akeredolu",
    ],
    correct: "Sapara Williams",
  },
  {
    question: "Who was the first and only prime minister of Nigeria?",
    options: [
      "Abubakar Tafawa Balewa",
      "Nnamdi Azikiwe",
      "Yakubu Gowon",
      "Ahmadu Bello",
    ],
    correct: "Abubakar Tafawa Balewa",
  },
  {
    question: "Where is the name Nigeria derived from?",
    options: ["River Niger", "Niger State", "Niger Republic", "Naija"],
    correct: "River Niger",
  },
  {
    question:
      "Who composed the Nigerian national anthem - 'Arise O Compatriots'?",
    options: [
      "Taiwo Akinkumi",
      "Ben Odiase",
      "Flora Shaw",
      "Lillian Jean Williams",
    ],
    correct: "Ben Odiase",
  },
  {
    question:
      "When did Nigeria change from right-hand drive to the left-hand drive?",
    options: [
      "2nd April 1973",
      "2nd May 1972",
      "1st April 1970",
      "2nd April 1972",
    ],
    correct: "2nd April 1972",
  },
  {
    question: "What are the two major religions in Nigeria?",
    options: [
      "Islam and Hinduism",
      "Christianity and Judism",
      "Christianity and Islam",
      "Christianity and Traditional",
    ],
    correct: "Christianity and Islam",
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  // Clear previous options
  optionsElement.innerHTML = "";

  // Load the current question
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;

  // Load the options
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => selectAnswer(button, option);
    optionsElement.appendChild(button);
  });
}

function selectAnswer(button, selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.correct) {
    score++;
    button.classList.add("correct");
    alert("Correct!");
  } else {
    button.classList.add("wrong");
    alert(`Wrong! The correct answer was ${currentQuizData.correct}`);
  }

  currentQuestion++;

  setTimeout(() => {
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      displayScore();
    }
  }, 1000);
}

function displayScore() {
  questionElement.innerText = "Quiz Complete!";
  optionsElement.innerHTML = "";
  scoreElement.innerText = `Your score: ${score} / ${quizData.length}`;
}

// Start the quiz
loadQuestion();
