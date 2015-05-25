/* will create the keyboard on html */

"use strict";



var kbLayout = []; /*number means space betwen keys*/
kbLayout.constantkb=29; /*constant for creating keyboard.  ==(kb width/key width) */


kbLayout.ENG = [];
kbLayout.ENG[0] = ["Esc",1,"F1","F2","F3","F4",0.5,"F5","F6","F7","F8",0.5,"F9","F10","F11","F12",0.5,"PrtSc","Scroll Lock","Pause<br>Break"];
kbLayout.ENG[1] = ["~<br>`","!<br>1","@<br>2","#<br>3","$<br>4","%<br>5","^<br>6","&<br>7","*<br>8","(<br>9",")<br>0","_<br>-","+<br>=","Backspace",0.5,"Insert","Home","PgUp",0.5,"Num Lock","/","*","-"];
kbLayout.ENG[2] = ["Tab","Q","W","E","R","T","Y","U","I","O","P","{<br>[","}<br>]","|<br>\\",0.5,"Delete","End","PgDn",0.5,"7<br>Home","8<br>&uarr;","9<br>PgUp","+"]
kbLayout.ENG[3] = ["Caps Lock","A","S","D","F","G","H","J","K","L",":<br>;","\'\'<br>\'","Enter",4,"4<br>&larr;","5","6<br>&rarr;"];
kbLayout.ENG[4] = ["Shift","Z","X","C","V","B","N","M","<<br>,","><br>.","?<br>/","Shift",1.5,"&uarr;",1.5,"1<br>End","2<br>&darr;","3<br>PgDn","Enter"];
kbLayout.ENG[5] = ["Ctrl","Win","Alt","spacebar","Alt","Win","Menu","Ctrl",0.5,"&larr;","&darr;","&rarr;",0.5,"0<br>Ins",".<br>Del"];
kbLayout.ES = [];
kbLayout.ES[1] = ['º','1','2','3','4','5','6','7','8','9','0','p','sp','del'];
kbLayout.ES[2] = ['tab','Q','W','E','R','T','Y','U','I','O','P','sp','sp'];
kbLayout.ES[3] = ['bloq','A','S','D','F','G','H','J','K','L','Ñ','sp','int'];
kbLayout.ES[4] = ['shift','<','Z','X','C','V','B','N','M',',','.','-','shift'];
kbLayout.ES[5] = ['ctrl','sp','sp','alt','spacebar','altgr','sp','ctrl'];


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



var sizekb = function(){ // get a good keyboard size for the screen. kb=Keyboard.units are pixels.
	var windowX=getSizeWindow(),
	keysize = parseInt(windowX/kbLayout.constant); //29 is constant .Global var
	console.log("size of window="+windowX+"key size="+keysize);
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

var createKeyboard = function (type,windowX){
	//sizekb(windowX);
	/*  
	switch(type){  //for future multiple keyboards
		default:
		spanish:
	}
	*/
	//console.log(kbLayout.ENG[3].length);
	document.writeln('<div id="keyboard" class="center">');
	for (var g=0,h=kbLayout.ENG.length;g<h;g++){  //rows
		document.writeln("<div  id='kbRow" + g + "' class='kbRow'>");
		for(var i=0,j=kbLayout.ENG[g].length;i<j;i++){
			var aux=kbLayout.ENG[g][i];
			if(isNaN(aux)){  //convert number to spaces between keys. This spaces are record as numbers
				createKey(aux);
			} 	
			else{
				empty(aux);
			}
			//createKey(aux);
		}
		document.writeln("</div>");
	}
	document.writeln("</div>");


}
var empty =function(aux){
	document.writeln('<div class="keywrapper">');
	document.writeln('</div>');
}
var createKey = function(key){
	/*switch(key){
		case "tab":
			console.log("rendering tab");
			break;
	}
	*/
	 document.writeln('<div class="keywrapper">');
	 //document.writeln('	 <div id="k3d'+key+'" class="key3d" onclick="keyPress(event)">');
	 document.writeln('  	<div id="k2d'+key+'" class="key2d">');
	 document.writeln('    		<p class="keylabel">'+key+'</p>');
	 document.writeln(' 	</div>');
	 //document.writeln('	 </div>');
	 document.writeln('</div>');
}  
