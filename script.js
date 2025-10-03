javascript
const questions = [
  {
    question: "Quel est mon plat préféré ?",
    answers: ["Pizza", "Riz", "Burger", "Pâtes"],
    correct: 0
  },
  {
    question: "Quelle est ma couleur préférée ?",
    answers: ["Rouge", "Bleu", "Vert", "Noir"],
    correct: 1
  },
  // Ou ka ajoute plis kesyon la...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
scoreElement.innerText = `Score final : score /{questions.length}`;
}

startGame();