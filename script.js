"use strict";
// selecting elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const outcome = document.getElementById("outcome");
const reset = document.querySelector(".play-again");

// element listeners
rock.addEventListener("click", rockHandler);
paper.addEventListener("click", paperHandler);
scissors.addEventListener("click", scissorsHandler);
reset.addEventListener("click", () => {
  document.location.reload();
});

let isRock = false;
function rockHandler(e) {
  isRock = !isRock;
  paper.classList.add("hidden");
  scissors.classList.add("hidden");
  if (!gameOver) gamePlay();
  compare();
}
let isPaper = false;
function paperHandler(e) {
  isPaper = !isPaper;
  rock.classList.add("hidden");
  scissors.classList.add("hidden");
  if (!gameOver) gamePlay();
  compare();
}

let isScissors = false;
function scissorsHandler(e) {
  isScissors = !isScissors;
  rock.classList.add("hidden");
  paper.classList.add("hidden");
  if (!gameOver) gamePlay();
  compare();
}

let computerGuess = 0;
let gameOver = false;
function gamePlay() {
  // generate random rock paper scissors
  const random = Math.trunc(Math.random() * 3) + 1;

  // store computer guess
  computerGuess = random;

  // display computer choice
  const renderComputerGuess = document.getElementById("computer guess");
  renderComputerGuess.src = `Images/rps-${random}.png`;
  renderComputerGuess.classList.remove("hidden");
  outcome.classList.remove("hidden");
  reset.classList.remove("hidden");

  // game status
  gameOver = !gameOver;
}

function compare() {
  // Player chooses Rock
  // draw
  if (isRock == true && computerGuess == 1) {
    outcome.innerText = "DRAW";

    // computer wins
  } else if (isRock == true && computerGuess == 2) {
    outcome.innerText = "PAPER COVERS ROCK \n \n YOU LOSE";

    // you win
  } else if (isRock == true && computerGuess == 3) {
    outcome.innerText = "ROCK BEATS SCISSORS \n \n YOU WIN";
  }

  // Player chooses Paper
  // draw
  if (isPaper == true && computerGuess == 2) {
    outcome.innerText = "DRAW";

    // computer wins
  } else if (isPaper == true && computerGuess == 3) {
    outcome.innerText = "SCISSORS CUT PAPER \n \n YOU LOSE";

    // you win
  } else if (isPaper == true && computerGuess == 1) {
    outcome.innerText = "PAPER COVERS ROCK \n \n YOU WIN";
  }

  // Player chooses Scissors
  // draw
  if (isScissors == true && computerGuess == 3) {
    outcome.innerText = "DRAW";

    // computer wins
  } else if (isScissors == true && computerGuess == 1) {
    outcome.innerText = "ROCK BEATS SCISSORS \n \n YOU LOSE";

    // you win
  } else if (isScissors == true && computerGuess == 2) {
    outcome.innerText = "SCISSORS CUT PAPER \n \n YOU WIN";
  }
}
