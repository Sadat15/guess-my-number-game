"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // If no number has been inputted
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    // When the guess is correct and player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#333";

  document.querySelector(".guess").value = "";

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".number").style.width = "15rem";
});
