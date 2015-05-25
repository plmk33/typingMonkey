/** this function loads after keyboard is created in keyboard.js
  * defer
  *
*/
"use strict";
function getSizeWindow(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    //var y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    console.log("x="+x);
    return x;
}



var resizekb = function(){ // get a good keyboard size for the screen. kb=Keyboard.units are pixels.
	var windowX=getSizeWindow(),
	keysize = parseInt(windowX/kbLayout.constantkb); //29 is constant .Global var
	console.log("size of window="+windowX+"key size="+keysize);
	var aux = document.getElementsByClassName("keywrapper");
	for(var i=0,j=aux.length;i<j;i++){
		aux[i].style.width=keysize+"px"; //error ?as loads earlier than element***?
		aux[i].style.height=keysize+"px";
	}
/*
	if(windowX>3000){
		kbLayout.widthX=6;
		kbLayout.heightX=6;
	}else if(windowX>1800){
		kbLayout.widthX=5;
		kbLayout.heightX=5;
	}else if(windowX>1280){
		kbLayout.widthX=4;
		kbLayout.heightX=4;
	}else if(windowX>800){
		kbLayout.widthX=3;
		kbLayout.heightX=3;
	}else{
		kbLayout.widthX=2;
		kbLayout.heightX=2;
	}*/

	//var xs = document.querySelectorAll(".key3d");
	//xs.style.backgroundColor="#f00";


}