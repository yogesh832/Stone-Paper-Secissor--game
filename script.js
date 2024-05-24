let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#userScore");
const compScorePara= document.querySelector("#computer-score");

const genCompChoice = () => {
  // Store our choices in an array
  let option = ["rock", "paper", "scissors"];
  const randomIdxNo = Math.floor(Math.random() * 3);
  return option[randomIdxNo];
};

const msg = document.querySelector(".msg-container");

const drawGame = () => {
  console.log("Game is Drawn");
  msg.innerText = "Game is Drawn!🙂. play again..";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userScorePara.innerText=userScore;
    console.log("You win the Game!");
    msg.innerText = `You win! 👑 Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.borderRadius = "100px";
  } else {
    compScore++;
    compScorePara.innerText=compScore;
    console.log("You lose!");
    msg.innerText = `You lose!🫣 ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.borderRadius = "100px";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice= ", userChoice);

  // Make computer's choice
  const compChoice = genCompChoice();
  console.log("Computer Choice= ", compChoice);

  // Draw game
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (compChoice === "rock") {
      // scissors or paper
      userWin = userChoice === "paper";
    } else if (compChoice === "paper") {
      // scissors or rock
      userWin = userChoice === "scissors";
    } else if (compChoice === "scissors") {
      // rock or paper
      userWin = userChoice === "rock";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
