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

    computerTurn();
    checkForWinner();
}

function computerTurn(){

    while(true){
        var row = Math.floor(Math.random()*2+1);
        var col = Math.floor(Math.random()*2+1);
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
    //check for X win
    //first row check
    if(board[0][0]=="X" && board[0][1]=="X" && board[0][2]=="X"){
        $("#results").text("You Won!");
    //second row check
    }else if(board[1][0]=="X" && board[1][1]=="X" && board[1][2]=="X"){
        $("#results").text("You Won!");
    //thrid row check
    }else if(board[2][0]=="X" && board[2][1]=="X" && board[2][2]=="X"){
        $("#results").text("You Won!");
    //first column
    }else if(board[0][0]=="X" && board[1][0]=="X" && board[2][0]=="X"){
        $("#results").text("You Won!");
    //second column
    }else if(board[1][0]=="X" && board[1][1]=="X" && board[1][2]=="X"){
        $("#results").text("You Won!");
    //third column
    }else if(board[2][0]=="X" && board[2][1]=="X" && board[2][2]=="X"){
        $("#results").text("You Won!");
    //first diagonal
    }else if(board[0][0]=="X" && board[1][1]=="X" && board[2][2]=="X"){
        $("#results").text("You Won!");
    //second diagonal
    }else if(board[0][2]=="X" && board[1][1]=="X" && board[2][0]=="X"){
        $("#results").text("You Won!");


    //check for 0 win
    //first row check
    }else if(board[0][0]=="O" && board[0][1]=="O" && board[0][2]=="O"){
        $("#results").text("You Lost");
    //second row check
    }else if(board[1][0]=="O" && board[1][1]=="O" && board[1][2]=="O"){
        $("#results").text("You Lost");
    //thrid row check
    }else if(board[2][0]=="O" && board[2][1]=="O" && board[2][2]=="O"){
        $("#results").text("You Lost");
    //first column
    }else if(board[0][0]=="O" && board[0][1]=="O" && board[0][2]=="O"){
        $("#results").text("You Lost");
    //second column
    }else if(board[1][0]=="O" && board[1][1]=="O" && board[1][2]=="O"){
        $("#results").text("You Lost");
    //third column
    }else if(board[2][0]=="O" && board[2][1]=="O" && board[2][2]=="O"){
        $("#results").text("You Lost");
    //first diagonal
    }else if(board[0][0]=="O" && board[1][1]=="O" && board[2][2]=="O"){
        $("#results").text("You Lost");
    //second diagonal
    }else if(board[0][2]=="O" && board[1][1]=="O" && board[2][0]=="O"){
        $("#results").text("You Lost");

    //no winner
    }else if(count != 9 ){
        $("#results").text("Keep Playing");
    }else{
        $("#results").text("Tie"); 
    }
}