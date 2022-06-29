
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
    if (loses == 5||wins == 5) {
        if (wins > loses) {
            Winner.textContent = "You Won!";
            Winner.setAttribute('style','color: #0a9dff;')
        } else {
            Winner.textContent = "You Lost!"
            Winner.setAttribute('style','color: #ff294d;')
        }
    }
    else if (playerSelection === computerSelection){
        ties++;
        Winner.setAttribute('style','color: black;')
        Winner.textContent = "It's a tie!";
    } 
    else if (computerSelection === "ROCK") {
        if (playerSelection === "PAPER") {
            wins++;
            Winner.setAttribute('style','color: #0a9dff;')
            Winner.textContent = ("You Win! Paper beats Rock");
        }
        else if (playerSelection === "SCISSORS") {
            loses++;
            Winner.setAttribute('style','color: #ff294d;')
            Winner.textContent = "You Lose! Rock beats Scissors";
            
        }
    }
    else if (computerSelection === "PAPER") {
        if (playerSelection === "SCISSORS") {
            wins++;
            Winner.setAttribute('style','color: #0a9dff;')
            Winner.textContent = "You Win! Scissors beats Paper";
        }
        else if (playerSelection === "ROCK") {
            loses++;
            Winner.setAttribute('style','color: #ff294d;')
            Winner.textContent = "You Lose! Scissors beats Rock";
        }
    }
    else if (computerSelection === "SCISSORS") {
        if (playerSelection === "ROCK") {
            wins++;
            Winner.setAttribute('style','color: #0a9dff;')
            Winner.textContent = "You Win! Rock beats Scissors";
        }
        else if (playerSelection === "PAPER") {
            loses++;
            Winner.setAttribute('style','color: #ff294d;')
            Winner.textContent = "You Lose! Scissors beats Paper";
        }
    }
}  

const Winner = document.querySelector('#winner');
const Score = document.querySelector('#score');

const Rock = document.querySelector('.rock'); 
Rock.addEventListener('click', function (e){
    playRound("Rock", computerPlay())
    Score.textContent = `Your Score:${wins} |  Op Score:${loses} | Ties:${ties}`

});
 
const Paper = document.querySelector('.paper'); 
Paper.addEventListener('click', function (e){
    playRound("Paper", computerPlay())
    Score.textContent = `Your Score:${wins} |  Op Score:${loses} | Ties:${ties}`
});

const Scissors = document.querySelector('.scissors'); 
Scissors.addEventListener('click', function (e){
    playRound("Scissors", computerPlay())
    Score.textContent = `Your Score:${wins} |  Op Score:${loses} | Ties:${ties}`
});

let game = false

const Play = document.querySelector('#play'); 
Play.addEventListener('click', function (e){
    Winner.textContent = "The Winner"
    Winner.setAttribute('style','color: black;')
    wins = 0;
    loses = 0;
    ties = 0;
    Score.textContent = `Your Score:${wins} |  Op Score:${loses} | Ties:${ties}`
}); 


/* 
while (game === false) {
    Winner.textContent = "The Winner"
    let wins = 0;
    let loses = 0;
    let ties = 0;
}
 */

/* Winner.setAttribute('style','color: purple; background: pink; border: thick solid black;'); */

/* Winner.setAttribute('style','color: #ff294d;')

Winner.setAttribute('style','color: #0a9dff;') */

/* function game() {
    for (let i = 0; i < 5; i++) {
        
        const Rock = document.querySelector('.rock'); 
        Rock.addEventListener('click', function (e){
            let result1 = playRound("Rock", computerPlay())
            console.log(result1)
            Winner.textContent = result1

        });
 
        const Paper = document.querySelector('.paper'); 
        Paper.addEventListener('click', function (e){
            let result2 = playRound("Paper", computerPlay())
            console.log(result2)
            Winner.textContent = result2
        });

        const Scissors = document.querySelector('.scissors'); 
        Scissors.addEventListener('click', function (e){
            let player = "Scissors"
            let result3 = playRound("Scissors", computerPlay())
            console.log(result3)
            Winner.textContent = result3
        });

        let userInput = prompt("Rock, Paper or Scissors?")
        let result = playRound(userInput, computerPlay());
        console.log(result)
    }

    console.log("End of Round");
    console.log(`Wins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    wins = 0;
    loses = 0;
    ties = 0;
} */
/* const game = false */

/* const Play = document.querySelector('#play'); 
Play.addEventListener('click', () => game = true); 
 */

/* console.log(game()); */

