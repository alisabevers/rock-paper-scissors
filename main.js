const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('invalid choice')
  }
}

const getComputerChoice = () => {
  let compGeneratedChoice = Math.floor(Math.random() * 3);
  if(compGeneratedChoice === 0) {
    return 'rock';
  } else if (compGeneratedChoice === 1) {
    return 'paper';
  } else if (compGeneratedChoice === 2){
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie.'
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!'
    } else {
      return 'User won!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!'
    } else {
      return 'User won!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!'
    } else {
      return 'User won!'
    }
  } else if (userChoice === 'bomb') {
    return 'User won!!'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('User choice: ', userChoice);
  console.log('Computer choice: ', computerChoice);

  console.log(determineWinner(userChoice, computerChoice))
}

playGame();