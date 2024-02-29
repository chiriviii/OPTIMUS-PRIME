function playGame(playerChoice) {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultat = '';

    let playerIcon = getPlayerIcon(playerChoice);
    let computerIcon = getComputerIcon(computerChoice);

    if (playerChoice === computerChoice) {
        resultat = "IT'S A TIE...";
    } else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        resultat = "WINNER!";
    } else {
        resultat = "LOSER!";
    }

    document.getElementById("result").innerHTML = `
        <p>You:  ${playerChoice} ${playerIcon}</p>
        <p>IA: ${computerChoice} ${computerIcon}</p>
        <p class="result-text">${resultat}</p>`;
}

function getPlayerIcon(choice) {
    switch (choice) {
        case "ROCK":
            return '<i class="fa-regular fa-hand-back-fist"></i>';
        case "PAPER":
            return '<i class="fa-regular fa-hand"></i>';
        case "SCISSORS":
            return '<i class="fa-regular fa-hand-scissors"></i>';
        default:
            return '';
    }
}

function getComputerIcon(choice) {
    switch (choice) {
        case "ROCK":
            return '<i class="fa-regular fa-hand-back-fist"></i>';
        case "PAPER":
            return '<i class="fa-regular fa-hand"></i>';
        case "SCISSORS":
            return '<i class="fa-regular fa-hand-scissors"></i>';
        default:
            return '';
    }
}
