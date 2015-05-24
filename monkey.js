"use strict";

var totalStrokes = 0;

var keyDown = function(event) {   //all capital letters
	//getKey(event);
	keyAnimation(getKey(event),1);
}
var keyPress = function(event) {  //distinguish capital letters and lowercase
	totalStrokes++;
	//console.log("keyPress");
	getKey(event);
	
}
var keyUp = function(event) {
	//console.log("keyUp");
	//keyAnimation(getKey(event),-1);
}


	
var getKey = function (event) {
    var x = event.which || event.keyCode;  	/* Firefox doesn't support event.which , then  use event.keyCode */
    console.log("The Unicode value is: " + x);
    console.log(String.fromCharCode(x));
    return String.fromCharCode(x);
}

var keyAnimation = function(key,direction){
	monkeyAnimation(direction);
}


var monkeyAnimation = function (direction) {
	console.log("in keyAnimation value = " + direction);
	if (direction == 1){		//move arm down
		document.getElementById("dinamic").style.transition= "none";
		document.getElementById("dinamic").style.transform = "rotate(-1deg)";

	} else {				//move arm up
		document.getElementById("dinamic").style.transition = "all 0.5s ease-in-out";
		document.getElementById("dinamic").style.transform = "rotate(+10deg)";
	}
    

}

