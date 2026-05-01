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


function getHumanChoice() {
    return prompt("Choose one: rock, paper, scissors").toLowerCase();
}


function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw! Both sides chose: ${capitalize(humanChoice)}`);
    } else if (
        humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore++;
        console.log(`You won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);