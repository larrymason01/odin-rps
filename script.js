var playerScoreElement = document.getElementById("player_score");
var compScoreElement = document.getElementById("comp_score");
var playerScore = 0;
var compScore = 0;

var player;
var comp;
var didPlayerPlay = false;


document.getElementById("rock").onmousedown = function () {
    player = "rock";
    didPlayerPlay = true;
};


document.getElementById("paper").onmousedown = function () {
    player = "paper";  
    didPlayerPlay = true;
};



document.getElementById("scissors").onmousedown = function () {
    player = "scissors";
    didPlayerPlay = true;
};


function play_round(player, comp) {
    if (player == "rock") {
        if (comp == "scissors")
            return 1;
        else if (comp == "paper")
            return 0;
        else
            return -1;
    } else if (player == "paper") {
        if (comp == "scissors")
            return 0;
        else if (comp == "paper")
            return -1;
        else
            return 1;
    } else {
        if (comp == "scissors")
            return -1;
        else if (comp == "paper")
            return 1;
        else
            return 0;
    }
}


function comp_play() {
    comp_hand = Math.random() * (max - min) + min;
}

while (true) {
    if (didPlayerPlay) {
        comp = comp_play();
        let round = play_round(player, comp);
        
        if (round == 1) {
            playerScore++;
        } else if (round == 0) {
            compScore++;
        }

        
        
        didPlayerPlay = false;
    }
}