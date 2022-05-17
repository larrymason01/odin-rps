let player_score = 0;
let cpu_score = 0;

let buttons = document.querySelectorAll('.button');

const player_score_text = document.querySelector('#player-score');
const cpu_score_text = document.querySelector('#cpu-score');

const winner_text = document.querySelector('#winner-text');
const win_text = document.querySelector('#win-text');

const reset_button = document.querySelector('#reset-button');

buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.setAttribute('style', 'margin-bottom: 5vh;');
    })

    button.addEventListener('mouseout', () => {
        button.setAttribute('style', 'margin-bottom: 0;');
    })

    button.addEventListener('click', () => {
        play_game(button.id)
    })
});

reset_button.addEventListener('click', () => {
    player_score = 0;
    cpu_score = 0;
    player_score_text.textContent = player_score;
    cpu_score_text.textContent = cpu_score;

    winner_text.textContent = 'GAME';
    win_text.textContent = 'RESET!';
});

function play_game(player_choice) {
    var cpu_choice = Math.floor(Math.random() * 3);

    if (cpu_choice == 0) {
        cpu_choice = 'rock';
    } else if (cpu_choice == 1) {
        cpu_choice = 'paper';
    } else {
        cpu_choice = 'scissors';
    }

    if (player_choice == 'rock') {
        if (cpu_choice == 'rock') 
            tie();
        else if (cpu_choice == 'paper') 
            player_loose();
        else 
            player_win();
    } else if (player_choice == 'paper') {
        if (cpu_choice == 'rock') 
            player_win();
        else if (cpu_choice == 'paper')
            tie();
        else
            player_loose();
    } else if (player_choice == 'scissors') {
        if (cpu_choice == 'rock')
            player_loose();
        else if (cpu_choice == 'paper') 
            player_win();
        else 
            tie();
    }
}

function player_win() {
    player_score++;
    player_score_text.textContent = player_score;

    winner_text.textContent = 'PLAYER';
    win_text.textContent = 'WINS!';
}

function player_loose() {
    cpu_score++;
    cpu_score_text.textContent = cpu_score;

    winner_text.textContent = 'CPU';
    win_text.textContent = 'WINS!';
}

function tie() {
    winner_text.textContent = 'TIE';
    win_text.textContent = 'GAME!';
}