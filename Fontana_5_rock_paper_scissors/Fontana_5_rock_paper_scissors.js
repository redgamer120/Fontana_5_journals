var wins =  0;
var lost = 0;
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
            wins++;
            document.getElementById("result").innerHTML = "You Win!<br>"+"Wins "+ wins +"<br>Lost "+lost;
            win_audio.play();
        }
        else {
            lost++;
            document.getElementById("result").innerHTML = "You Lose!<br>"+"Wins "+ wins +"<br>Lost "+lost;
            lose_audio.play();
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            wins++;
            document.getElementById("result").innerHTML = "You Win!<br>"+"Wins "+ wins +"<br>Lost "+lost;
            win_audio.play();
        }
        else if (choice2 ==="scissors") {
            lost++;
            document.getElementById("result").innerHTML = "You Lose!<br>"+"Wins "+ wins +"<br>Lost "+lost;
            lose_audio.play();
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            lost++;
            document.getElementById("result").innerHTML = "You Lose!<br>"+"Wins "+ wins +"<br>Lost "+lost;
            lose_audio.play();
        }
        else if (choice2 === "paper") {
            wins++;
            document.getElementById("result").innerHTML = "You Win!<br>"+"Wins "+ wins +"<br>Lost "+lost;
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