
const paragraphs = [
  "Typing is a fundamental skill for many professions today. Practicing typing can help you become faster and more accurate over time.",
  "The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English language.",
  "In today's world, computers and smartphones are a part of everyday life. Typing skills can boost productivity and communication.",
  "Programming requires logical thinking and clear syntax. The more you practice coding and typing, the better you become at both."
];

let currentParagraph = "";
let timeLeft = 60;
let timer;
let correctWords = 0;
let errors = 0;

function setTime(seconds) {
  timeLeft = seconds;
  document.getElementById("time").textContent = timeLeft;
}

function getRandomParagraph() {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)];
}

function startTest() {
  currentParagraph = getRandomParagraph();
  document.getElementById("textDisplay").textContent = currentParagraph;
  document.getElementById("textInput").value = "";
  correctWords = 0;
  errors = 0;
  document.getElementById("cw").textContent = correctWords;
  document.getElementById("errors").textContent = errors;

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endTest();
    }
  }, 1000);
}

function stopTest() {
  clearInterval(timer);
}

function restartTest() {
  startTest();
}

function endTest() {
  const input = document.getElementById("textInput").value.trim();
  const inputWords = input.split(" ");
  const targetWords = currentParagraph.split(" ");

  inputWords.forEach((word, index) => {
    if (word === targetWords[index]) correctWords++;
    else errors++;
  });

  document.getElementById("cw").textContent = correctWords;
  document.getElementById("errors").textContent = errors;

  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("resultStats").textContent =
    `WPM: ${correctWords} | Errors: ${errors}`;
}
document.getElementById("textInput").addEventListener("input", () => {});
