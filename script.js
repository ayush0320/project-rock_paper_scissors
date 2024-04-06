const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = options[(Math.floor(Math.random() * options.length))]
    return choice
}

// Math.random() - choose a random number between 0 & 1
// Math.floor() - rounds the number down to the nearest integer

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        return "player :)";
    }
    else {
        return "computer :("
    }
}
