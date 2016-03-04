var lose_audio = new Audio('lose_sound.mp3');
var win_audio = new Audio('win_sound.mp3');
var tie_audio = new Audio('tie_sound.mp3');
var player;
var choice = function(choice) {
    player = choice;
}

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
}
else if (computerChoice < 0.67) {
    computerChoice = "paper";
}   
else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        document.getElementById("result").innerHTML = "Tie!";
            tie_audio.play();
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "You Win!";
            win_audio.play();
        }
        else {
            document.getElementById("result").innerHTML = "You Lose!";
            lose_audio.play();
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Win!";
            win_audio.play();
        }
        else if (choice2 ==="scissors") {
            document.getElementById("result").innerHTML = "You Lose!";
            lose_audio.play();
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Lose!";
            lose_audio.play();
        }
        else if (choice2 === "paper") {
            document.getElementById("result").innerHTML = "You Win!";
            win_audio.play();
        }
    }
    else {
        document.getElementById("result").innerHTML = "ERROR!";
    }
}

function reload() {
    location.reload();
}