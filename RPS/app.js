let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function toWord(letter) {
    if(letter === 'r') {
        return 'Rock';
    } else if(letter === 'p') {
        return 'Paper';
    }else if(letter === 's') {
        return 'Scissors';
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${toWord(userChoice)} beats ${toWord(computerChoice)} You Win! 🔥`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${toWord(computerChoice)} beats ${toWord(userChoice)} You Lose! 💩`;
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${toWord(computerChoice)} is equal to ${toWord(userChoice)} It's a draw. ✏️`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            lose(userChoice, computerChoice);   
            break;
        case 'rr':
        case 'pp':
        case 'ss':    
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })
    paper_div.addEventListener('click', function() {
        game('p');
    })
    scissors_div.addEventListener('click', function() {
        game('s');
    })
}

main();


