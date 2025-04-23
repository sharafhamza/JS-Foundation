const startQuizBtn = document.querySelector("#startQuiz");
const quizShow = document.querySelector(".quiz-show");
const queTitle = document.querySelector(".que-title");
const options = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");

const quiz = [
  {
    que: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    ans: "Tokyo",
  },
  {
    que: "What is H2O commonly known as?",
    options: ["Oxygen", "Water", "Hydrogen", "Salt"],
    ans: "Water",
  },
  {
    que: "Which organ pumps blood through the body?",
    options: ["Lungs", "Liver", "Brain", "Heart"],
    ans: "Heart",
  },
  {
    que: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "Europe"],
    ans: "Africa",
  },
  {
    que: "Which is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Great White Shark"],
    ans: "Blue Whale",
  },
];

let currentQueIndex = 0;
let score = 0;

startQuizBtn.addEventListener("click", () => {
  startQuizBtn.classList.add("hidden");
  quizShow.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  queTitle.textContent = quiz[currentQueIndex].que;
  options.innerHTML = ""; // Clear previous options
  nextBtn.classList.add("hidden");

  quiz[currentQueIndex].options.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("option");
    options.appendChild(li);

    li.addEventListener("click", () => {
      // Disable further clicks
      document.querySelectorAll(".option").forEach((btn) => {
        btn.style.pointerEvents = "none";

        if (btn.textContent === quiz[currentQueIndex].ans) {
          btn.style.backgroundColor = "green";
        } else if (btn.textContent === item) {
          btn.style.backgroundColor = "red";
        }
      });

      // Score check
      if (item === quiz[currentQueIndex].ans) {
        score++;
      }

      nextBtn.classList.remove("hidden");
    });
  });
}

nextBtn.addEventListener("click", () => {
  currentQueIndex++;
  if (currentQueIndex < quiz.length) {
    showQuestion();
  } else {
    quizShow.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your Score: ${score}/${quiz.length}</p>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
});
