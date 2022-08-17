let playerScore = 0;
let computerScore = 0;

function createButtons(...text) {
    let choiceButtons = document.querySelector('#choiceButtons');
    document.body.appendChild(choiceButtons);

    text.forEach(ele => {
        let btn = document.createElement('button');
        btn.textContent = ele;
        choiceButtons.appendChild(btn);
    })
}

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
    let resultsDiv = document.querySelector('#roundResults');
        
    if (playerSelection === computerSelection) {
        resultsDiv.textContent = `You Tie!`;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;       
        resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        computerScore++;
        resultsDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }

    document.body.appendChild(resultsDiv);

    let scoreDiv = document.createElement('div');
    scoreDiv.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    resultsDiv.appendChild(scoreDiv);
}

function compareScores(playerScore, computerScore) {
    let endgameResults = document.querySelector('#gameResults');

    if (playerScore > computerScore) {
        endgameResults.textContent = `You Win! ${playerScore} to ${computerScore}`
    } else {
        endgameResults.textContent = `You Lose! ${computerScore} to ${playerScore}`
    }

    document.body.appendChild(endgameResults);
}

function playOnClick(e) {
    let playerChoice = e.target.textContent;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);

    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach(button => 
            button.removeEventListener('click', playOnClick));

        compareScores(playerScore, computerScore);
    }
}

createButtons('Rock', 'Paper', 'Scissors');

let buttons = document.querySelectorAll('button');

buttons.forEach(button =>
    button.addEventListener('click', playOnClick));








