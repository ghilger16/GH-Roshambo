"use strict";
let item = document.querySelector(".game");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let gameHidden = document.querySelector(".game hidden");
let gameText = document.getElementById("game-text");

rock.addEventListener("click", rockHandler);
paper.addEventListener("click", paperHandler);
scissors.addEventListener("click", scissorsHandler);

function rockHandler(e) {
  paper.classList.add("hidden");
  scissors.classList.add("hidden");
  gamePlay();
}

function paperHandler(e) {
  rock.classList.add("hidden");
  scissors.classList.add("hidden");
  gamePlay();
}

function scissorsHandler(e) {
  rock.classList.add("hidden");
  paper.classList.add("hidden");
  gamePlay();
}

function gamePlay() {
  // generate random rock paper scissors
  const random = Math.trunc(Math.random() * 3) + 1;

  // display computer choice
  const computerGuess = document.getElementById("computer guess");
  computerGuess.src = `Images/rps-${random}.png`;
  computerGuess.classList.remove("hidden");
  document.getElementById("scoreboard").classList.remove("hidden");
}
