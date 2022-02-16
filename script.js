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

//Declare that the computers input is the computerplay function
const computerSelection = computerPlay();

//Create the buttons that call the correct option
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');
const userPoint = document.querySelector('.user');
const computerPoint = document.querySelector('.pc');

//Display the running score, and announce a winner of the game once one player reaches 5 points
const game = () => {
    for (let i = 0; i < 5; i++){
        //Make the buttons return the correct option on click
        rock.addEventListener('click', () => {
            playRound('rock');
        });

        paper.addEventListener('click', () => {
            playRound('paper');
        });

        scissors.addEventListener('click', () => {
            playRound('scissors');
        });

        //Round of rock, paper, scissors
        const playRound = (playerSelection) => {
            const computerSelection = computerPlay();

            //Display the score of both user and pc
            let userScore = parseInt(0);
            let computerScore = parseInt(0);

            if (computerSelection == playerSelection){
                result.textContent = "It's a Draw";
                computerPoint.textContent = "Your opponent's score is "+ computerScore;
                userPoint.textContent = "Your score is "+ userScore;
            } else if (computerSelection == "rock" && playerSelection == "scissors"){
                computerScore += 1;
                computerPoint.textContent = "Your opponent's score is "+ computerScore;
                userPoint.textContent = "Your score is "+ userScore
                result.textContent = "You Lost! Rock beats scissors";
            } else if (computerSelection == "scissors" && playerSelection == "paper"){
                computerScore += 1;
                computerPoint.textContent = "Your opponent's score is "+ computerScore;
                userPoint.textContent = "Your score is "+ userScore
                result.textContent = "You Lost! Scissors beats paper";
            } else if (computerSelection == "paper" && playerSelection == "rock"){
                computerScore += 1;
                computerPoint.textContent = "Your opponent's score is "+ computerScore;
                userPoint.textContent = "Your score is "+ userScore
                result.textContent = "You Lost! Paper beats rock";
            } else {
                userScore += 1;
                computerPoint.textContent = "Your opponent's score is "+ computerScore;
                userPoint.textContent = "Your score is "+ userScore
                result.textContent = "You won! Good job";
            }
        }
    }
};

game();