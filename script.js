const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

function getComputerChoice() {
  // create array with all game values and return a random value
  const gameValues = [rock, paper, scissors];
  let randomIndex = Math.floor(Math.random() * gameValues.length);
  return gameValues[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  switch(true) {
    case playerSelection === computerSelection:
      return 'It\'s Tie!';
    case playerSelection === rock && computerSelection === paper:
      return 'You Lose! Paper beats Rock';
    case playerSelection === rock && computerSelection === scissors:
      return 'You Win! Rock beats Scissors';
    case playerSelection === paper && computerSelection === rock:
      return 'You Win! Paper beats Rock';
    case playerSelection === paper && computerSelection === scissors:
      return 'You Lose! Scissors beats Paper';
    case playerSelection === scissors && computerSelection === rock:
      return 'You Lose! Rock beats Scissors';
    case playerSelection === scissors && computerSelection === paper:
      return 'You Win! Scissors beats Paper';
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));