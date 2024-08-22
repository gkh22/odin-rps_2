
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

function playRound(humanChoice, computerChoice) {
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
    calculateScores(result);
    displayResult(result);
}

function displayResult(result) {
    let human_counter = document.querySelector(".human_score");
    let computer_counter = document.querySelector(".computer_score");
    let restart = document.querySelector(".restart");
    let buttons = document.querySelector(".buttons");
    if (human_score == 5) {
        human_counter.textContent = "Radical, you won!";
        computer_counter.textContent = "Beep, borrrpp..";
        buttons.classList.toggle("invisible");
        restart.classList.toggle("invisible");
    }
    else if (computer_score == 5) {
        human_counter.textContent = "You lost!";
        computer_counter.textContent = "Boop! Boop Beep!";
        buttons.classList.toggle("invisible");
        restart.classList.toggle("invisible");
    }
    else {
        human_counter.textContent = human_score;
        computer_counter.textContent = computer_score;
    }
}

function calculateScores(result) {
    if (result == 1) {
        human_score += 1;
    }
    else if (result == 0) {
        computer_score += 1;
    }
}

function resetGame() {
    let human_counter = document.querySelector(".human_score");
    let computer_counter = document.querySelector(".computer_score");
    let restart = document.querySelector(".restart");
    let buttons = document.querySelector(".buttons");

    human_score = 0;
    computer_score = 0;

    human_counter.textContent = 0;
    computer_counter.textContent = 0;
    buttons.classList.remove("invisible");
    restart.classList.add("invisible");
}

resetGame();

let rock_button = document.querySelector(".rock");
let scissors_button = document.querySelector(".scissors");
let paper_button = document.querySelector(".paper");
let play_again = document.querySelector(".play_again");

rock_button.addEventListener("click", () => { playRound("rock", getComputerChoice()); });
paper_button.addEventListener("click", () => { playRound("paper", getComputerChoice()); });
scissors_button.addEventListener("click", () => { playRound("scissors", getComputerChoice()); });
play_again.addEventListener("click", resetGame);

