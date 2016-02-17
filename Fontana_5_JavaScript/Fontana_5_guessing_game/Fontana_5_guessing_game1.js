var guess = prompt ("What is your guess");
var number = Math.round((Math.random() * 300)  + 1);
while (number != guess) {
    if (guess < number){
        guess = prompt("To little, try again.");
        document.write(guess + " to little, try again.<br>");
    }else if (guess > number){
        guess = prompt("To big, try again.");
        document.write(guess + " to big, try again.<br>");
    }else if (guess = number){
        guess = prompt("You got it right. YAY!");
        document.write(guess + " you got it right. YAY!<br>");
    }else {
        guess = prompt("This should never happen.");
        document.write("This should never happen.<br>");
        break;
    }
}