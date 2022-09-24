const getComputerChoice = () => {
  let choice = ["rock", "paper", "scissors"];
  function rand() {
    return Math.floor(Math.random() * choice.length);
  }
  return choice[rand()];
};

let playerChoice = prompt(
  "Make a selection: Rock, Paper or Scissors"
).toLowerCase();
const singleRound = (playerSelection, computerSelection) => {
  if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Win! Paper wraps Rock`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You Lose! Scissors cuts Paper`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You Lose! Paper wraps Rock`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win! Rock breaks Scissors`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win! Paper wraps Rock`;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return `You Lose! Rock breaks Scissors`;
  } else {
    return `This game is a draw!`;
  }
};

console.log(singleRound(playerChoice, getComputerChoice()));
