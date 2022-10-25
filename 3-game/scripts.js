var spots = ["spot1", "spot2", "spot3", "spot4", "spot5", "spot6", "spot7", "spot8", "spot9"];

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
        spots.remove("spot1");
    }else if (spotNumber == 2){
        $("#sp2x").attr("visibility","visible");
    }else if (spotNumber == 3){
        $("#sp3x").attr("visibility","visible");
    }else if (spotNumber == 4){
        $("#sp4x").attr("visibility","visible");
    }else if (spotNumber == 5){
        $("#sp5x").attr("visibility","visible");
    }else if (spotNumber == 6){
        $("#sp6x").attr("visibility","visible");
    }else if (spotNumber == 7){
        $("#sp7x").attr("visibility","visible");
    }else if (spotNumber == 8){
        $("#sp8x").attr("visibility","visible");
    }else if (spotNumber ==9){
        $("#sp9x").attr("visibility","visible");
    }

}