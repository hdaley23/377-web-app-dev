function printSquares() {
    var items = "";

    var i = 1;
    while (i <= 10) {
        items += "<li>" + Math.pow(i, 2) + "</li>";
        i++;
    }

    document.getElementById("squares").innerHTML = items;
}

function guessName() {
    var guess = prompt("What's my name?");
    var count = 1;

    while (guess != "Bob") {
        guess = prompt("That's not it! Try again.");
        count++;
    }

    alert("You got it! It took you " + count + " guesses.");
}

function printPowers() {
    var items = "";

    var i = 0;
    while (i < 10) {
        items += "<li>" + Math.pow(2, i) + "</li>";
        i++;
    }

    document.getElementById("powers").innerHTML = items;
}

var secret = Math.floor(Math.random() * 100) + 1
function guessNumber() {
    var guess = prompt("Guess a number:");
    var count = 1;

    while (guess != secret) {
        if (guess > secret){
            guess =prompt("Too high. Try again.");
        }else if (guess < secret){
            guess = prompt("Too low. Try again.")
        }

        count++;
    }

    alert("You got it! It took you " + count + " guesses.");
}