$(document).ready(function(){
//Changes the background images
	
$('.subButton').click(function(){
	
  if ($('#mk').is(':checked')){
	$("#table").hide();
	$("#halo_table").hide();
	$("#gow_table").hide();
	$("#gta_table").hide();
	$("#mk_table").show();
	$("#table2").hide();


	}

	 if ($('#bl').is(':checked')){
		$("#mk_table").hide();
		$("#table").show();
		$("#gow_table").hide();
		$("#gta_table").hide();
		$("#halo_table").hide();
		$("#table2").hide();
		

	} if($('#gta').is(':checked')){
		$("#gta_table").show();
		$("#mk_table").hide();
		$("#halo_table").hide();
	    $("#gow_table").hide();
		$("#table").hide();
		$("#table2").hide();
	
		
	}if($('#halo').is(':checked')){
		$("#halo_table").show();
		$("#mk_table").hide();
		$("#gta_table").hide();
		$("#gow_table").hide();
		$("#table").hide();
		$("#table2").hide();
		
		
	}if($('#gow').is(':checked')){
		$("#mk_table").hide();
		$("#gow_table").show();
		$("#table").hide();
		$("#gta_table").hide();
		$("#halo_table").hide();
		$("#table2").hide();
		
	}if($('#3').is(':checked')){
		$("#mk_table").hide();
		$("#gow_table").hide();
		$("#table").hide();
		$("#gta_table").hide();
		$("#halo_table").hide();
		$("#table2").show();
		
	}
  });

});

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var totalSeconds = 0;
setInterval(setTime, 1000);
//sets timer
function setTime() {
  ++totalSeconds
;
  sec.innerHTML = pad(totalSeconds
 % 60);
  min.innerHTML = pad(parseInt(totalSeconds
 / 60));
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
	document.getElementById("min").innerHTML = "00";
	document.getElementById("sec").innerHTML = "00";
	totalSeconds = 0;
	var i, x;
	var j, y;
	for(i=1; i<=4; i++){
		for(j=1; j<=4; j++){
			var row = Math.floor(Math.random()*4 + 1);
			var column = Math.floor(Math.random()*4 + 1);

			//shuffle for borderlands table 
			var temp = document.getElementById("r"+i+"c"+j).className;
  			document.getElementById("r"+i+"c"+j).className = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = temp;

  			//shuffle for Halo table
  			var tep = document.getElementById("a"+i+j).className;
  			document.getElementById("a"+i+j).className = document.getElementById("a"+row+column).className;
  			document.getElementById("a"+row+column).className = tep;

  			//shuffle for Mortal Kombat table
  			var tp = document.getElementById("m"+i+j).className;
  			document.getElementById("m"+i+j).className = document.getElementById("m"+row+column).className;
  			document.getElementById("m"+row+column).className = tp;	

  			//shuffle for GTA table
  			var tmp = document.getElementById("d"+i+j).className;
  			document.getElementById("d"+i+j).className = document.getElementById("d"+row+column).className;
  			document.getElementById("d"+row+column).className = tmp; 

  			//shuffle for God of War table
  			var ts = document.getElementById("c"+i+j).className;
  			document.getElementById("c"+i+j).className = document.getElementById("c"+row+column).className;
  			document.getElementById("c"+row+column).className = ts;	 	
		}
	}

	//shuffle for 3x3 table
	for(x=1; x<=3; x++){
		for(y=1; y<=3; y++){
			var rows = Math.floor(Math.random()*3 + 1);
			var columns = Math.floor(Math.random()*3 + 1);

  			var t = document.getElementById("r"+x+y).className;
  			document.getElementById("r"+x+y).className = document.getElementById("r"+rows+columns).className;
  			document.getElementById("r"+rows+columns).className = t;
		}
	}
});


//Checks for empty space near the clicked cell 
function clickCell(row, column){
	var cell = document.getElementById("r"+row+"c"+column);
	var tile = cell.className;
	var i = parseInt(column,10)+1;
	var j = parseInt(column,10)-1;
	var w = parseInt(row,10)+1;
	var z = parseInt(row,10)-1;

 	if (tile!="cell16") { 
       if (column<4) {
       	 
         if ( document.getElementById("r"+row+"c"+i).className=="cell16") {
           	var temp = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = document.getElementById("r"+row+"c"+i).className;
  			document.getElementById("r"+row+"c"+i).className = temp;
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("r"+row+"c"+j).className=="cell16") {
           	var temp = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = document.getElementById("r"+row+"c"+j).className;
  			document.getElementById("r"+row+"c"+j).className = temp;
           return;
         }
       }
       if (row<4) {
         if ( document.getElementById("r"+w+"c"+column).className=="cell16") {
           	var temp = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = document.getElementById("r"+w+"c"+column).className;
  			document.getElementById("r"+w+"c"+column).className = temp;
           return;
         }
       } 
       if (row>1) {
         if ( document.getElementById("r"+z+"c"+column).className=="cell16") {
           	var temp = document.getElementById("r"+row+"c"+column).className;
  			document.getElementById("r"+row+"c"+column).className = document.getElementById("r"+z+"c"+column).className;
  			document.getElementById("r"+z+"c"+column).className = temp;
           return;
         }
       }
       
  }
}


//On click for for 3x3
function clickCell3(row, column){
	var cell = document.getElementById("r"+row+column);
	var tile = cell.className;
	var i = parseInt(column,10)+1;
	var j = parseInt(column,10)-1;
	var w = parseInt(row,10)+1;
	var z = parseInt(row,10)-1;

 	if (tile!="celll9") { 
       if (column<3) {
       	 
         if ( document.getElementById("r"+row+i).className=="celll9") {
           	var temp = document.getElementById("r"+row+column).className;
  			document.getElementById("r"+row+column).className = document.getElementById("r"+row+i).className;
  			document.getElementById("r"+row+i).className = temp;
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("r"+row+j).className=="celll9") {
           	var temp = document.getElementById("r"+row+column).className;
  			document.getElementById("r"+row+column).className = document.getElementById("r"+row+j).className;
  			document.getElementById("r"+row+j).className = temp;
           return;
         }
       }
       if (row<3) {
         if ( document.getElementById("r"+w+column).className=="celll9") {
           	var temp = document.getElementById("r"+row+column).className;
  			document.getElementById("r"+row+column).className = document.getElementById("r"+w+column).className;
  			document.getElementById("r"+w+column).className = temp;
           return;
         }
       } 
       if (row>1) {
         if ( document.getElementById("r"+z+column).className=="celll9") {
           	var temp = document.getElementById("r"+row+column).className;
  			document.getElementById("r"+row+column).className = document.getElementById("r"+z+column).className;
  			document.getElementById("r"+z+column).className = temp;
           return;
         }
       }
       
  }
}

// on click for God of War table
function clickCellGoW(row, column){
	var cell = document.getElementById("c"+row+column);
	var tile = cell.className;
	var i = parseInt(column,10)+1;
	var j = parseInt(column,10)-1;
	var w = parseInt(row,10)+1;
	var z = parseInt(row,10)-1;

 	if (tile!="gow16") { 
       if (column<4) {
       	 
         if ( document.getElementById("c"+row+i).className=="gow16") {
           	var temp = document.getElementById("c"+row+column).className;
  			document.getElementById("c"+row+column).className = document.getElementById("c"+row+i).className;
  			document.getElementById("c"+row+i).className = temp;
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("c"+row+j).className=="gow16") {
           	var temp = document.getElementById("c"+row+column).className;
  			document.getElementById("c"+row+column).className = document.getElementById("c"+row+j).className;
  			document.getElementById("c"+row+j).className = temp;
           return;
         }
       }
       if (row<4) {
         if ( document.getElementById("c"+w+column).className=="gow16") {
           	var temp = document.getElementById("c"+row+column).className;
  			document.getElementById("c"+row+column).className = document.getElementById("c"+w+column).className;
  			document.getElementById("c"+w+column).className = temp;
           return;
         }
       } 
       if (row>1) {
         if ( document.getElementById("c"+z+column).className=="gow16") {
           	var temp = document.getElementById("c"+row+column).className;
  			document.getElementById("c"+row+column).className = document.getElementById("c"+z+column).className;
  			document.getElementById("c"+z+column).className = temp;
           return;
         }
       }
       
  }
}


// on click for GTA table
function clickCellGTA(row, column){
	var cell = document.getElementById("d"+row+column);
	var tile = cell.className;
	var i = parseInt(column,10)+1;
	var j = parseInt(column,10)-1;
	var w = parseInt(row,10)+1;
	var z = parseInt(row,10)-1;

 	if (tile!="gow16") { 
       if (column<4) {
       	 
         if ( document.getElementById("d"+row+i).className=="gta16") {
           	var temp = document.getElementById("d"+row+column).className;
  			document.getElementById("d"+row+column).className = document.getElementById("d"+row+i).className;
  			document.getElementById("d"+row+i).className = temp;
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("d"+row+j).className=="gta16") {
           	var temp = document.getElementById("d"+row+column).className;
  			document.getElementById("d"+row+column).className = document.getElementById("d"+row+j).className;
  			document.getElementById("d"+row+j).className = temp;
           return;
         }
       }
       if (row<4) {
         if ( document.getElementById("d"+w+column).className=="gta16") {
           	var temp = document.getElementById("d"+row+column).className;
  			document.getElementById("d"+row+column).className = document.getElementById("d"+w+column).className;
  			document.getElementById("d"+w+column).className = temp;
           return;
         }
       } 
       if (row>1) {
         if ( document.getElementById("d"+z+column).className=="gta16") {
           	var temp = document.getElementById("d"+row+column).className;
  			document.getElementById("d"+row+column).className = document.getElementById("d"+z+column).className;
  			document.getElementById("d"+z+column).className = temp;
           return;
         }
       }
       
  }
}


// on click for the Halo table
function clickCellH(row, column){
	var cell = document.getElementById("a"+row+column);
	var tile = cell.className;
	var i = parseInt(column,10)+1;
	var j = parseInt(column,10)-1;
	var w = parseInt(row,10)+1;
	var z = parseInt(row,10)-1;

 	if (tile!="halo16") { 
       if (column<4) {
       	 
         if ( document.getElementById("a"+row+i).className=="halo16") {
           	var temp = document.getElementById("a"+row+column).className;
  			document.getElementById("a"+row+column).className = document.getElementById("a"+row+i).className;
  			document.getElementById("a"+row+i).className = temp;
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("a"+row+j).className=="halo16") {
           	var temp = document.getElementById("a"+row+column).className;
  			document.getElementById("a"+row+column).className = document.getElementById("a"+row+j).className;
  			document.getElementById("a"+row+j).className = temp;
           return;
         }
       }
       if (row<4) {
         if ( document.getElementById("a"+w+column).className=="halo16") {
           	var temp = document.getElementById("a"+row+column).className;
  			document.getElementById("a"+row+column).className = document.getElementById("a"+w+column).className;
  			document.getElementById("a"+w+column).className = temp;
           return;
         }
       } 
       if (row>1) {
         if ( document.getElementById("a"+z+column).className=="halo16") {
           	var temp = document.getElementById("a"+row+column).className;
  			document.getElementById("a"+row+column).className = document.getElementById("a"+z+column).className;
  			document.getElementById("a"+z+column).className = temp;
           return;
         }
       }
       
  }
}

// on click for the Mortal Kombat table
function clickCellM(row, column){
	var cell = document.getElementById("m"+row+column);
	var tile = cell.className;
	var i = parseInt(column,10)+1;
	var j = parseInt(column,10)-1;
	var w = parseInt(row,10)+1;
	var z = parseInt(row,10)-1;

 	if (tile!="mk16") { 
       if (column<4) {
       	 
         if ( document.getElementById("m"+row+i).className=="mk16") {
           	var temp = document.getElementById("m"+row+column).className;
  			document.getElementById("m"+row+column).className = document.getElementById("m"+row+i).className;
  			document.getElementById("m"+row+i).className = temp;
           return;
         }
       }
       if (column>1) {
         if ( document.getElementById("m"+row+j).className=="mk16") {
           	var temp = document.getElementById("m"+row+column).className;
  			document.getElementById("m"+row+column).className = document.getElementById("m"+row+j).className;
  			document.getElementById("m"+row+j).className = temp;
           return;
         }
       }
       if (row<4) {
         if ( document.getElementById("m"+w+column).className=="mk16") {
           	var temp = document.getElementById("m"+row+column).className;
  			document.getElementById("m"+row+column).className = document.getElementById("m"+w+column).className;
  			document.getElementById("m"+w+column).className = temp;
           return;
         }
       } 
       if (row>1) {
         if ( document.getElementById("m"+z+column).className=="mk16") {
           	var temp = document.getElementById("m"+row+column).className;
  			document.getElementById("m"+row+column).className = document.getElementById("m"+z+column).className;
  			document.getElementById("m"+z+column).className = temp;
           return;
         }
       }
       
  }
}





