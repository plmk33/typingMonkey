"strict mode";
/*page for test purposes
** control of events
** 1- get key up, key donwn and key press
** 2- get press of div with the mouse
** 3- print keys character on screen
** 3- get press of special keys?
*/

function onLoad(){
	console.log("onLoad");
	//alert("I work");
}
function keypressed(key,way){
	console.log(key+" pressed "+way);
	textOnTop.innerHTML+=key;
}

function writeInDiv(text){  //writeInTextOnTop
	textOnTop.innerHTML+=text;
}

var textOnTop=document.getElementById("textOnTop"); 





window.addEventListener("keydown",function(){writeInDiv("down.")},false);
window.addEventListener("keypress",function(){writeInDiv("press.")},true); //bubbling
window.addEventListener("keyup",function(){writeInDiv("up.")},false);
