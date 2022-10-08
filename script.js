const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

function getComputerChoice() {
  // create array with all game values and return a random value
  const gameValues = [rock, paper, scissors];
  let randomIndex = Math.floor(Math.random() * gameValues.length);
  return gameValues[randomIndex];
}


console.log(getComputerChoice());