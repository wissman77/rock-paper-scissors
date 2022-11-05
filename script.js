const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

let computerScore = 0;
let playerScore = 0;

// UI elements
const btns = document.querySelectorAll('.buttons i');
const playerScoreUI = document.querySelector('.player-score');
const computerScoreUI = document.querySelector('.computer-score');
const roundResultUI = document.querySelector('.round-result');
const finalResultUI = document.querySelector('.final-result');
const resetDiv = document.querySelector('.reset-div');
const resetBtn = document.querySelector('.reset');

// Reset the game;
resetBtn.addEventListener('click', initialGame)

initialGame();


function playGame(e) {
  let playerSelection = '';

  if (e.target.classList.contains(rock)) {
    playerSelection = rock;
  } else if (e.target.classList.contains(paper)) {
    playerSelection = paper;
  } else if (e.target.classList.contains(scissors)) {
    playerSelection = scissors;
  }

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  roundResultUI.textContent = `Round result: ${result}`;

  if (result.startsWith('You Lose!')) {
      computerScore += 1;
  } else if (result.startsWith('You Win!')) {
      playerScore += 1;
  }

  playerScoreUI.textContent = playerScore;
  computerScoreUI.textContent = computerScore;

  let finalResult = showWinner(playerScore, computerScore);
  finalResultUI.textContent = finalResult;

  if (finalResult) {
    resetDiv.style.display = 'block';
  }
}



function initialGame() {
  computerScore = 0;
  playerScore = 0;

  for (let button of btns) {
    button.addEventListener('click', (e) => playGame(e));
  }
  playerScoreUI.textContent = 0;
  computerScoreUI.textContent = 0;
  roundResultUI.textContent = '';
  finalResultUI.textContent = '';

  resetDiv.style.display = 'none';
}

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
  if (playerScore === 5) {
    return `You Win the game, Player score: ${playerScore}, Computer score: ${computerScore}`;
  } else if (computerScore === 5) {
    return `You Lose the game, Player score: ${playerScore}, Computer score: ${computerScore}`;
  } else {
    return '';
  }
}
