document.getElementById("startBtn").addEventListener("click", roll);

var player1score = 0;
var player2score = 0;
var input = 9;

function roll() {
    var num1 = Math.random() * 6 + 1;
    var num2 = Math.random() * 6 + 1;
    
    num1 = Math.floor(num1);
    num2 = Math.floor(num2);
    
    document.getElementById("dice1").innerHTML = num1;
    document.getElementById("dice2").innerHTML = num2;
    
    if(num1 > num2) {
        document.getElementById("winner").innerHTML = 
        "Player 1 Wins";
        player1score++;
    }
    else if(num1 < num2) {
        document.getElementById("winner").innerHTML = 
        "Player 2 Wins";
        player2score++;
    }
    else {
        document.getElementById("winner").innerHTML = 
        "DRAW";
    }
    document.getElementById("score1").innerHTML = player1score;
    document.getElementById("score2").innerHTML = player2score;

    if(player1score == input) {
        alert("Player 1 is the winner!")
    }
    else if(player1score == input) {
        alert("Player 2 is the winner!")
    }    
}