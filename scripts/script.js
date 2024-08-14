
function getComputerChoice() {
    let comp_choice = Math.floor(Math.random() * 3);
    if (comp_choice == 0) {
        return "rock";
    }
    else if(comp_choice == 1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}



function isValidInput(input) {
    input = input.toLowerCase();
    if (input != "rock" && input != "scissors" && input != "paper") {
        return false;
    }
    return true;
}

function getHumanChoice() {
    let humanChoice = "";
    do {
        humanChoice = prompt("Rock, Paper, Scissors?: ");
    } while (!isValidInput(humanChoice));
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    result = -1;

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            
            result = 1;
        }
        else if (computerChoice == "paper") {
            
            result = 0;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            
            result = 1;
        }
        else if (computerChoice == "scissors") {
            
            result = 0;
        }
    }
    else {
        if (computerChoice == "paper") {
            
            result = 1;
        }
        else if (computerChoice == "rock") {
        
            result = 0;
        }
    }
    return result;
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        result = playRound(getHumanChoice(), getComputerChoice());
        if (result == 1) {
            humanScore += 1;
            console.log("You win!");
        }
        else if (result == 0) {
            computerScore += 1;
            console.log("You lose!");
        }
        else {
            console.log("Tie!");
        }
    }

    if (humanScore > computerScore) {
        console.log("Human victory!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer victory..");
    }
    else {
        console.log("Tie!");
    }
}

playGame(5);





