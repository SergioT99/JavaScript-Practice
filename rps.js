
const getUserChoice = userInput =>{
 userInput = userInput.toLowerCase();
  if(userInput === 'rock'){
   return userInput;
 } else if(userInput === 'paper'){
   return userInput;
 }else if(userInput === 'scissors'){
   return userInput;
 }else{
   console.log('Error not a valid choice');
 }
};

const getComputerChoice = () =>{
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
   }
};

const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice){
    return 'game was a tie';
  }else if(userChoice === 'paper' && computerChoice === 'rock'){
    return 'You win!';
  }else if(userChoice === 'rock' && computerChoice === 'paper'){
    return 'Computer won :p';
  }else if(userChoice === 'scissors' && computerChoice === 'paper'){
    return 'You win!';
  }else if(userChoice === 'rock' && computerChoice === 'scissors'){
    return 'You win!';
  }else if(userChoice === 'paper' && computerChoice === 'scissors'){
    return 'Computer won :p';
  }else if(userChoice === 'scissors' && computerChoice === 'rock'){
    return 'Computer won :p';
  }
};

const playGame = () =>{
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
