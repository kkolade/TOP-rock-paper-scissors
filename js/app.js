// A function to get computer choice
const getComputerChoice = () => {
  let choice = ["rock", "paper", "scissors"];
  function rand() {
    return Math.floor(Math.random() * choice.length);
  }
  return choice[rand()];
};

// A function to play a single round of the game
const playRound = (playerSelection, computerSelection) => {
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
    return `This round is a draw!`;
  }
};

const game = () => {
  let score = 0,
    result;
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(
      "Make a selection: Rock, Paper or Scissors"
    ).toLowerCase();
    result = playRound(playerChoice, getComputerChoice());
    if (result.includes("Win")) {
      score++;
    }
    console.log(`${result}`);
  }
  if (score >= 3) {
    console.log(`You Win!, you won ${score} games out of 5`);
  } else {
    console.log(
      `You Lose!, you won ${score} game${score === 1 ? "" : "s"} out of 5`
    );
  }
};

game();
