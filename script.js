console.log("I am working");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    if(choice == 0) {
        choice = "rock";
        // console.log(choice);
    } else if(choice == 1) {
        choice = "paper";
        // console.log(choice);
    } else {
        choice = "scissors"
        // console.log(choice);
    }
    return choice;
}


// console.log(computerChoice);

function getHumanChoice() {
    let choice = prompt("please enter your choice");
    return choice;
}


// console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("I am playround func");
    if(humanChoice == computerChoice) {
        console.log("It's a tie!");
    } 
    if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("Computer Won! Paper beats rock");
        computerScore++;
        // return computerScore;
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You won! Rock beats scissors");
        humanScore++;
        // return humanScore;
    }

    if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Won! Paper beats rock");
        humanScore++;
        // return humanScore;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Computer Won! Scissors beat paper");
        computerScore++;
        // return computerScore;
    }

    if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer won! rock beats scissors");
        computerScore++;
        // return computerScore;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Won! Scissors beat paper");
        humanScore++;
        // return humanScore;
    }


}

// playRound(humanChoice, computerChoice);

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for(let i=0; i<5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore) {
        console.log(`You Won! ${humanScore} times in five rounds`);
    } else if(computerScore > humanScore) {
        console.log(`Computer Won! ${computerScore} times in five rounds`);
    } else {
        console.log(`Its a tie! Both you ${humanScore} have won this many times and computer ${computerScore} have won this many times`);
    }
    return;
}

playGame();