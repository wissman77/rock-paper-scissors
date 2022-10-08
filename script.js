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


  switch(true) {
    case playerSelection === computerSelection: {
      return 'It\'s Tie!';
    }
    case playerSelection === rock && computerSelection === paper: {
      return 'You Lose! Paper beats Rock';
    }
    case playerSelection === rock && computerSelection === scissors: {
      return 'You Win! Rock beats Scissors';
    }
    case playerSelection === paper && computerSelection === rock: {
      return 'You Win! Paper beats Rock';
    }
    case playerSelection === paper && computerSelection === scissors: {
      return 'You Lose! Scissors beats Paper';
    }
    case playerSelection === scissors && computerSelection === rock: {
      return 'You Lose! Rock beats Scissors';
    }
    case playerSelection === scissors && computerSelection === paper: {
      return 'You Win! Scissors beats Paper';
    }
  }
}

function showWinner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    return `It's a Tie, Player score: ${playerScore}, Computer score: ${computerScore}`;
  } else if (playerScore > computerScore) {
    return `You Win the game, Player score: ${playerScore}, Computer score: ${computerScore}`;
  } else {
    return `You Lose the game, Player score: ${playerScore}, Computer score: ${computerScore}`;
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {

    let playerSelection = prompt('Please choose Rock, Paper or Scissors');

    // Keep asking the player until geting the correct choice
    while (playerSelection !== rock && playerSelection !== paper && playerSelection !== scissors) {
      playerSelection = prompt('Please choose Rock, Paper or Scissors');
    }
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.startsWith('You Lose!')) {
      computerScore += 1;
    } else if (result.startsWith('You Win!')) {
      playerScore += 1;
    }

    console.log(`${result}, player score: ${playerScore}, computer score: ${computerScore}`);
  }

  // show the global results and winner with scores
  console.log(showWinner(playerScore, computerScore));
}


game();