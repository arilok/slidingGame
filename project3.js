$(document).ready(function(){
//Changes the background images
$('.subButton').click(function(){
	
  if ($('#mk').is(':checked')){
	$("#table").hide();
	$("#halo_table").hide();
	$("#gow_table").hide();
	$("#gta_table").hide();
	$("#mk_table").show();

	} if ($('#bl').is(':checked')){
		$("#mk_table").hide();
		$("#table").show();
		$("#gow_table").hide();
		$("#gta_table").hide();
		$("#halo_table").hide();

	} if($('#gta').is(':checked')){
		$("#gta_table").show();
		$("#mk_table").hide();
		$("#halo_table").hide();
	    $("#gow_table").hide();
		$("#table").hide();
		
	}if($('#halo').is(':checked')){
		$("#halo_table").show();
		$("#mk_table").hide();
		$("#gta_table").hide();
		$("#gow_table").hide();
		$("#table").hide();
		
	}if($('#gow').is(':checked')){
		$("#mk_table").hide();
		$("#gow_table").show();
		$("#table").hide();
		$("#gta_table").hide();
		$("#halo_table").hide();
	}
});

document.getElementById("r1c1").addEventListener("click", clickCell(1,1));
document.getElementById("r1c2").addEventListener("click", clickCell(1,2));
document.getElementById("r1c3").addEventListener("click", clickCell(1,3));
document.getElementById("r1c4").addEventListener("click", clickCell(1,4));

document.getElementById("r2c1").addEventListener("click", clickCell(2,1));
document.getElementById("r2c2").addEventListener("click", clickCell(2,2));
document.getElementById("r2c3").addEventListener("click", clickCell(2,3));
document.getElementById("r2c4").addEventListener("click", clickCell(2,4));

document.getElementById("r3c1").addEventListener("click", clickCell(3,1));
document.getElementById("r3c2").addEventListener("click", clickCell(3,2));
document.getElementById("r3c3").addEventListener("click", clickCell(3,3));
document.getElementById("r3c4").addEventListener("click", clickCell(3,4));

document.getElementById("r4c1").addEventListener("click", clickCell(4,1));
document.getElementById("r4c2").addEventListener("click", clickCell(4,2));
document.getElementById("r4c3").addEventListener("click", clickCell(4,3));
document.getElementById("r4c4").addEventListener("click", clickCell(4,4));
});

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);
//sets timer
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//shuffles the cells
$('.shuffle').click(function(){
	document.getElementById("minutes").innerHTML = "00";
	document.getElementById("seconds").innerHTML = "00";
	totalSeconds = 0;
	var i;
	var j;
	for(i=1; i<=4; i++){
		for(j=1; j<=4; j++){
			var row = Math.floor(Math.random()*4 + 1);
			var column = Math.floor(Math.random()*4 + 1);

			var temp = document.getElementById("r"+i+"c"+j).className;
  			document.getElementById("r"+i+"c"+j).className = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = temp;
		}
	}
});

//Checks for empty space near the clicked cell 
function clickCell(row, column){
	var cell = document.getElementById("r"+row+"c"+column).className;
	var tile = cell.className;
		totalSeconds = 0;

	
 	if (tile!="cell16") { 
       if (column<4) {
         if ( document.getElementById("r"+row+"c"+(column+1)).className=="tile16") {
           	var temp = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = document.getElementById("r"+row+"c"+(column+1)).className;
  			document.getElementById("r"+row+"c"+(column+1)).className = temp;
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("r"+row+"c"+(column-1)).className=="tile16") {
           	var temp = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = document.getElementById("r"+row+"c"+(column-1)).className;
  			document.getElementById("r"+row+"c"+(column-1)).className = temp;
           return;
         }
       }
       if (row>1) {
         if ( document.getElementById("r"+(row-1)+"c"+column).className=="tile16") {
           	var temp = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = document.getElementById("r"+(row+1)+"c"+column).className;
  			document.getElementById("r"+(row+1)+"c"+column).className = temp;
           return;
         }
       }
       if (row<4) {
         if ( document.getElementById("r"+(row+1)+"c"+column).className=="tile16") {
           	var temp = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = document.getElementById("r"+(row-1)+"c"+column).className;
  			document.getElementById("r"+(row-1)+"c"+column).className = temp;
           return;
         }
       } 
  }
}



