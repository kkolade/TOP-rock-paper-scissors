const getComputerChoice = () => {
  let choice = ["rock", "paper", "scissors"];
  function rand() {
    return Math.floor(Math.random() * choice.length);
  }
  return choice[rand()];
};

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
