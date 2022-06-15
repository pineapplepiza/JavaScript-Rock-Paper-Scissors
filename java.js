
function computerPlay() {
    const options = ["ROCK", "PAPER", "SCISSORS"]
    return options[Math.floor(Math.random()*options.length)];
}

let wins = 0;
let loses = 0;
let ties = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toUpperCase();    
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection){
        ties++;
        return "It's a tie!";
    } 
    else if (computerSelection === "ROCK") {
        if (playerSelection === "PAPER") {
            wins++;
            return ("You Win! Paper beats Rock");
        }
        else if (playerSelection === "SCISSORS") {
            loses++;
            return "You Lose! Rock beats Scissors";
        }
    }
    else if (computerSelection === "PAPER") {
        if (playerSelection === "SCISSORS") {
            wins++;
            return "You Win! Scissors beats Paper";
        }
        else if (playerSelection === "ROCK") {
            loses++;
            return "You Lose! Scissors beats Rock";
        }
    }
    else if (computerSelection === "SCISSORS") {
        if (playerSelection === "ROCK") {
            wins++;
            return "You Win! Rock beats Scissors";
        }
        else if (playerSelection === "PAPER") {
            loses++;
            return "You Lose! Scissors beats Paper";
        }
    }
    else {
        return "ERROR!"
    }
}  

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, Paper or Scissors?")
        let result = playRound(userInput, computerPlay());
        console.log(result)
    }

    console.log("End of Round");
    console.log(`Wins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    wins = 0;
    loses = 0;
    ties = 0;
}

console.log(game());

