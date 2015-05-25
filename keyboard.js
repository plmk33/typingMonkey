/**creates the keyboard in HTML code
  *
  * 
  */

"use strict";

var kbLayout = []; 
kbLayout.constantkb=29; //constant for creating keyboard.  ==(screen_width/key_width) 
kbLayout.keysize=44; 	//keysize is 44 by default  used by several functions

kbLayout.shadowTop="#ddd";
kbLayout.shadowLeft="#aaa";
kbLayout.shadowBottom="#ccc";
kbLayout.shadowTop="#bbb";
kbLayout.shadowRight="#bbb";

kbLayout.ENG = [];
kbLayout.ENG[0] = ["Esc",1,"F1","F2","F3","F4",0.5,"F5","F6","F7","F8",0.5,"F9","F10","F11","F12",0.5,"PrtSc","Scroll Lock","Pause<br>Break"];
kbLayout.ENG[1] = ["~<br>`","!<br>1","@<br>2","#<br>3","$<br>4","%<br>5","^<br>6","&<br>7","*<br>8","(<br>9",")<br>0","_<br>-","+<br>=","Backspace",0.5,"Insert","Home","PgUp",0.5,"Num Lock","/","*","-"];
kbLayout.ENG[2] = ["Tab","Q","W","E","R","T","Y","U","I","O","P","{<br>[","}<br>]","|<br>\\",0.5,"Delete","End","PgDn",0.5,"7<br>Home","8<br>&uarr;","9<br>PgUp","+"]
kbLayout.ENG[3] = ["Caps Lock","A","S","D","F","G","H","J","K","L",":<br>;","\'\'<br>\'","Enter ",4,"4<br>&larr;","5","6<br>&rarr;"];
kbLayout.ENG[4] = ["Shift","Z","X","C","V","B","N","M","<<br>,","><br>.","?<br>/","Shift ",1.5,"&uarr;",1.5,"1<br>End","2<br>&darr;","3<br>PgDn","Enter"];
kbLayout.ENG[5] = ["Ctrl","Win","Alt","_","Alt","Win","Menu","Ctrl",0.5,"&larr;","&darr;","&rarr;",0.5,"0<br>Ins",".<br>Del"];

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



var resizekb = function(){ // get a good keyboard size for the screen. kb=Keyboard.units are pixels.
	var windowX=getSizeWindow();
	kbLayout.keysize = parseInt(windowX/kbLayout.constantkb); //29 is constant .Global var
	//console.log("size of window="+windowX+"key size="+kbLayout.keysize);
	var aux = document.getElementsByClassName("keywrapper");
	for(var i=0,j=aux.length;i<j;i++){
		aux[i].style.width=kbLayout.keysize+"px"; 
		aux[i].style.height=kbLayout.keysize+"px";
	}
	var aux2 = document.getElementsByClassName("key2d");
	for(var i=0,j=aux2.length;i<j;i++){
		aux2[i].style.borderTop=kbLayout.shadowTop+" "+parseInt(kbLayout.keysize/10)+"px solid";
		aux2[i].style.borderLeft=kbLayout.shadowLeft+" "+parseInt(kbLayout.keysize/7)+"px solid";
		aux2[i].style.borderBottom=kbLayout.shadowBottom+" "+parseInt(kbLayout.keysize/5)+"px solid";
		aux2[i].style.borderRight=kbLayout.shadowRight+" "+parseInt(kbLayout.keysize/7)+"px solid";
	}
	var aux3 = document.getElementsByClassName("keylabel");
	for(var i=0,j=aux3.length;i<j;i++){
		aux3[i].style.fontSize=parseInt(kbLayout.keysize/4)+"px";
		aux3[i].style.top=parseInt(kbLayout.keysize/40)+"px"; 
	}
	document.getElementById("keyboard").style.borderRadius=kbLayout.keysize/2+"px";
	document.getElementById("keyboard").style.padding=kbLayout.keysize+"px";
}

var createKeyboard = function (type,windowX){

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
	var aux="";
	var size=1;   //size 1= regular key,    size=2 : 2 times  the size of a regular key 
	switch(key){
		case "Tab":
			size=1.5;
			break;
		case "Backspace":
			size=2;
			break;
		case "|<br>\\":
			size=1.5;
			break;
		case "Caps Lock":
			size=1.75;
			break;	
		case "Enter ":  //added an space for distinguishing the two enter keys
			size=2.25;
			break;
		case "Shift":
			size=2.25;
			break;	
		case "Shift ": //added an space for distinguishing the two shifts keys
			size=2.75;
			break;	
		case "Ctrl":
			size=1.25;
			break;	
		case "Win":
			size=1.25;
			break;	
		case "Alt":
			size=1.25;
			break;	
		case "_":
			size=6.25;
			break;	
		case "Menu":
			size=1.25;
			break;	
		case "Enter":
			size=1;
			break;	
		default:
			break;
	}
	aux="style='width:"+(size*kbLayout.keysize)+" !important'";
	document.writeln('<div class="keywrapper" '+aux+'>');
	//document.writeln('	 <div id="k3d'+key+'" class="key3d" onclick="keyPress(event)">');
	document.writeln('  	<div id="k2d'+key+'" class="key2d">');
	document.writeln('    		<p class="keylabel">'+key+'</p>');
	document.writeln(' 	</div>');
	//document.writeln('	 </div>');
	document.writeln('</div>');
}  
