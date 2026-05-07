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


function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice === computerChoice) {
        console.log(`Draw! Both sides chose: ${capitalize(humanChoice)}`);
    } else if (
        humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        winner = "human"
        console.log(`You won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
    } else {
        winner = "computer";
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
    }

    return winner
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const winner = playRound(humanSelection, computerSelection);

        switch (winner) {
            case "human":
                humanScore++;
                break;

            case "computer":
                computerScore++;
                break;
        }
    }

    console.log("Final scores:")
    console.log(`Player: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const humanSelection = e.target.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});
