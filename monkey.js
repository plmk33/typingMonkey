"use strict";

var keyStrokes = 0;

var keyDown = function() {}
var keyPress = function() {
	document.getElementById('totalstrokes').innerHTML(++keystrokes);
}
var keyUp = function() {}

var  swapStyleSheet= function(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
	document.getElementById("counter1").innerHTML="counter = "+ ++counter1;

}


var keyAnimation = function (direction) {
	if (direction==1){//move arm down
					
	} else {		//move arm up

	}
    

}

