$(document).ready(function () {
    setXandO();
});

function setXandO() {
  for (var i = 0; i < 9; i++){
    var allX = "#x" + i;
    $(allX).attr("visibility","hidden");

    var allO = "#o" + i;
    $(allO).attr("visibility","hidden");
  }
}

function elementClicked(evt, spotNumber){
    if (spotNumber == 1){
        $(x1).attr("visibility","visible");
    }else if (spotNumber == 2){
        $(x2).attr("visibility","visible");
    }else if (spotNumber == 3){
        $(x3).attr("visibility","visible");
    }else if (spotNumber == 4){
        $(x4).attr("visibility","visible");
    }else if (spotNumber == 5){
        $(x5).attr("visibility","visible");
    }else if (spotNumber == 6){
        $(x6).attr("visibility","visible");
    }else if (spotNumber == 7){
        $(x7).attr("visibility","visible");
    }else if (spotNumber == 8){
        $(x8).attr("visibility","visible");
    }else if (spotNumber ==9){
        $(x9).attr("visibility","visible");
    }
}