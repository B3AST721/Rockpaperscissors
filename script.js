//This is the computers turn
const computerPlay = () => {
    if (Math.ceil(Math.random() * 3) == 1){
        return "rock";
    } else if (Math.ceil(Math.random() * 3) == 2){
        return "paper";
    } else {
        return "scissors";
    }
}

//One round of rock, paper, scissors
const playRound = (computerSelection, playerSelection) => {
    if (computerSelection == playerSelection){
        return "It's a Draw";
    } else if (computerSelection == "rock" && playerSelection == "scissors"){
        return "You Lost! Rock beats scissors";
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
        return "You Lost! Scissors beats paper";
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        return "You Lost! Paper beats rock";
    } else {
        return "You won! Good job";
    }
}

//Declare that the computers input is the computerplay function
const computerSelection = computerPlay();

//Play a 5 round game
const game = () => {
    for (let i = 0; i < 5; i++){
        return playRound(computerSelection, window.prompt("Enter rock, paper, or scissors?"));
    }
}
console.log(game());