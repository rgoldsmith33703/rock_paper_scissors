let playerScore;
let computerScore;

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum === 0) {
        return "ROCK"
    } else if (choiceNum === 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    
    if (playerSelection === computerSelection) {
        console.log(`You Tie!`);
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;       
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}

function playFiveRounds() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors... ");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

function playTieBreaker(playerScore, computerScore) {
    while (playerScore === computerScore) {
        playRound()
    }
}

function compareScores(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `You Win! ${playerScore} to ${computerScore}`
    } else {
        return `You Lose! ${computerScore} to ${playerScore}`
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    
    playFiveRounds();
    playTieBreaker(playerScore, computerScore);

    let response = compareScores(playerScore, computerScore);
    
    console.log(response);
}