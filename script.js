js
const questions = [
  {
    question: "Quelle est ma couleur préférée?",
    answers: ["Bleu", "Rouge", "Vert", "Noir"],
    correct: 0
},
  {
    question: "Quel plat j’aime le plus?",
    answers: ["Pizza", "Sushi", "Spaghetti", "Fritay"],
    correct: 3
},
  {
    question: "À quelle heure je me réveille le dimanche?",
    answers: ["6h", "8h", "10h", "Midi"],
    correct: 2
},
  {
    question: "Quel est mon animal préféré?",
    answers: ["Chat", "Chien", "Oiseau", "Lapin"],
    correct: 1
},
  {
    question: "Quel genre de musique j’écoute le plus?",
    answers: ["Rap", "Kompa", "Jazz", "Afrobeat"],
    correct: 1
},
  {
    question: "Quel est mon réseau social préféré?",
    answers: ["Facebook", "Instagram", "TikTok", "Twitter"],
    correct: 2
},
  {
    question: "Quel est mon rêve secret?",
    answers: ["Voyager", "Devenir célèbre", "Avoir une entreprise", "Écrire un livre"],
    correct: 0
},
  {
    question: "Comment je réagis quand je suis stressé?",
    answers: ["Je parle", "Je dors", "Je mange", "Je reste silencieux"],
    correct: 3
}
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  document.getElementById("answers").innerHTML = "";

  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(i);
    document.getElementById("answers").appendChild(btn);
});
}

function checkAnswer(i) {
  if (i === questions[current].correct) score++;
  current++;
  if (current < questions.length) {
    showQuestion();
} else {
    showResult();
}
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
} else {
    showResult();
}
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = `
    <h3>Tu as obtenu ${score}/${questions.length} points!</h3>
    <p>Partage ce défi avec tes amis pour voir qui te connaît le mieux!</p>
    <a href="https://saintphardwolson6-debug.github.io/defi-amis/" target="_blank">Jouer à nouveau</a>
  `;
}

showQuestion();