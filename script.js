"use strict";
// selecting elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const outcome = document.getElementById("outcome");
const reset = document.querySelector(".play-again");
const playerChoiceDisplay = document.getElementById("player");
const computerChoiceDisplay = document.getElementById("computer");

// element listeners
rock.addEventListener("click", () => compareChoices("rock"));
paper.addEventListener("click", () => compareChoices("paper"));
scissors.addEventListener("click", () => compareChoices("scissors"));
reset.addEventListener("click", () => {
  document.location.reload();
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}
function renderResults(userChoice, computerChoice) {
  const renderPlayerChoice = document.getElementById("playerChoice");
  renderPlayerChoice.src = `Images/rps-${userChoice}.png`;
  renderPlayerChoice.classList.remove("hidden");

  const renderComputerChoice = document.getElementById("computerChoice");
  renderComputerChoice.src = `Images/rps-${computerChoice}.png`;
  renderComputerChoice.classList.remove("hidden");

  outcome.classList.remove("hidden");
  reset.classList.remove("hidden");
  playerChoiceDisplay.classList.remove("hidden");
  computerChoiceDisplay.classList.remove("hidden");
}

function compareChoices(userChoice) {
  rock.classList.add("hidden");
  paper.classList.add("hidden");
  scissors.classList.add("hidden");

  const computerChoice = getComputerChoice();

  renderResults(userChoice, computerChoice);

  switch (userChoice + computerChoice) {
    case "rockscissors":
      outcome.innerText = "ROCK BEATS SCISSORS \n \n YOU WIN";
      break;
    case "paperrock":
      outcome.innerText = "PAPER COVERS ROCK \n \n YOU WIN";
      break;
    case "scissorspaper":
      outcome.innerText = "SCISSORS CUT PAPER \n \n YOU WIN";
      break;
    case "scissorsrock":
      outcome.innerText = "ROCK BEATS SCISSORS \n \n YOU LOSE";
      break;
    case "rockpaper":
      outcome.innerText = "PAPER COVERS ROCK \n \n YOU LOSE";
      break;
    case "paperscissors":
      outcome.innerText = "SCISSORS CUT PAPER \n \n YOU LOSE";
      break;
    case "rockrock":
      outcome.innerText = "DRAW";
      break;
    case "paperpaper":
      outcome.innerText = "Draw";
      break;
    case "scissorsscissors":
      outcome.innerText = "Draw";
      break;
    default:
      return;
  }
}
