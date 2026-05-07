function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    let choice = "";

    if (num === 0) {
        choice = "rock";
    } else if (num === 1) {
        choice = "paper";
    } else {
        choice = "scissors"
    }

    return choice;
}


function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}


function playerWon(humanChoice, computerChoice) {
    const rockBeatsScissors = humanChoice === "rock" && computerChoice === "scissors";
    const paperBeatsRock = humanChoice === "paper" && computerChoice === "rock";
    const scissorsBeatsPaper = humanChoice === "scissors" && computerChoice === "paper";

    return rockBeatsScissors || paperBeatsRock || scissorsBeatsPaper;
}


function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.querySelector("#results")
    let winner = "";
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `Draw! Both sides chose: ${capitalize(humanChoice)}`;
    } else if (playerWon(humanChoice, computerChoice)) {
        winner = "human"
        resultsDiv.textContent = `You won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        winner = "computer";
        resultsDiv.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
    }

    return winner
}

let humanScore = 0;
let computerScore = 0;
const NUMBER_OF_ROUNDS = 5;
let endOfGame = false;

function updateScore(winner) {
    const scores = document.querySelector("#scores");
    switch (winner) {
        case "human":
            humanScore++;
            break;

        case "computer":
            computerScore++;
            break;
    }

    if (humanScore === NUMBER_OF_ROUNDS) {
        scores.textContent = "CONGRATULATIONS! YOU WON THE GAME!";
        endOfGame = true;
    } else if (computerScore === NUMBER_OF_ROUNDS) {
        scores.textContent = "Too bad. You lost the game.";
        endOfGame = true;
    } else {
        scores.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    }
}

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (!endOfGame) {
            const humanSelection = e.target.textContent.toLowerCase();
            const computerSelection = getComputerChoice();
            const winner = playRound(humanSelection, computerSelection);
            updateScore(winner);
        }
    });
});
