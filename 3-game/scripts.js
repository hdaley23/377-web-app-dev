//start of confetti
const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 0);
};

//end of confetti
const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};


var board = [["", "", ""],
             ["", "", ""],
             ["", "", ""]];
var count = 0;

$(document).ready(function () {
    setXandO();
});

function setXandO() {
  for (var i = 0; i < 10; i++){
    var allX = "#sp" + i + "x";
    $(allX).attr("visibility","hidden");

    var allO = "#sp" + i + "o";
    $(allO).attr("visibility","hidden");
  }
}

function elementClicked(evt, spotNumber){
    if (spotNumber == 1){
        $("#sp1x").attr("visibility","visible");
        board[0][0]="X";
        count = count+1;
    }else if (spotNumber == 2){
        $("#sp2x").attr("visibility","visible");
        board[0][1]="X";
        count = count+1;
    }else if (spotNumber == 3){
        $("#sp3x").attr("visibility","visible");
        board[0][2]="X";
        count = count+1;
    }else if (spotNumber == 4){
        $("#sp4x").attr("visibility","visible");
        board[1][0]="X";
        count = count+1;
    }else if (spotNumber == 5){
        $("#sp5x").attr("visibility","visible");
        board[1][1]="X";
        count = count+1;
    }else if (spotNumber == 6){
        $("#sp6x").attr("visibility","visible");
        board[1][2]="X";
        count = count+1;
    }else if (spotNumber == 7){
        $("#sp7x").attr("visibility","visible");
        board[2][0]="X";
        count = count+1;
    }else if (spotNumber == 8){
        $("#sp8x").attr("visibility","visible");
        board[2][1]="X";
        count = count+1;
    }else if (spotNumber == 9){
        $("#sp9x").attr("visibility","visible");
        board[2][2]="X";
        count = count+1;
    }

    checkForWinner();
    if(count !=9){
        computerTurn();
        checkForWinner();
    }
  
}

function computerTurn(){

    while(true){
        var row = Math.floor(Math.random()*3);
        var col = Math.floor(Math.random()*3);
        var box = (row * 3)+col+1;
    

        if(board[row][col]==""){
            $("#sp" + box + "o").attr("visibility","visible");
            board[row][col]="O";
            count = count+1;
            break;
        }

    }
}


function checkForWinner(){
    if(checkWin("X")){
        $("#results").text("You Won!");
        start();
        stop();
    }else if(checkWin("O")){
        $("#results").text("You Lost");
    }else if(count != 9 ){
        $("#results").text("Keep Playing");
    }else{
        $("#results").text("Tie"); 
    }
}

function checkWin(token){
    return (board[0][0]==token && board[0][1]==token && board[0][2]==token) ||
           (board[1][0]==token && board[1][1]==token && board[1][2]==token) || 
           (board[2][0]==token && board[2][1]==token && board[2][2]==token) ||
           (board[0][0]==token && board[1][0]==token && board[2][0]==token) ||
           (board[1][0]==token && board[1][1]==token && board[1][2]==token) ||
           (board[2][0]==token && board[2][1]==token && board[2][2]==token) ||
           (board[0][0]==token && board[1][1]==token && board[2][2]==token) ||
           (board[0][2]==token && board[1][1]==token && board[2][0]==token);
}