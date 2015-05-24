/* will create the keyboard on html */

"use strict";



var kbLayout = []; /*number means space betwen keys*/

kbLayout.widthX=1; //times the width of keys. vary on the screen size.(responsive)   e.g: width= 4*kWidthX
kbLayout.heightX=1; //times height of keys

kbLayout.ENG = [];
kbLayout.ENG[0] = ["Esc",1,"F1","F2","F3","F4",0.5,"F5","F6","F7","F8",0.5,"F9","F10","F11","F12",0.5,"PrtSc","Scroll Lock","Pause\nBreak"];
kbLayout.ENG[1] = ["~\n`","!\n1","@\n2","#\n3","$\n4","%\n5","^\n6","&\n7","*\n8","(\n9",")\n0","_\n-","+\n=","Backspace",0.5,"Insert","Home","PgUp",0.5,"Num Lock","/","*","-"];
kbLayout.ENG[2] = ["Tab","Q","W","E","R","T","Y","U","I","O","P","{\n[","}\n]","|\n\\",0.5,"Delete","End","PgDn",0.5,"7\nHome","8\n↑","9\nPgUp","+"]
kbLayout.ENG[3] = ["Caps Lock","A","S","D","F","G","H","J","K","L",":\n;","\"\n'","Enter",4,"4\n←","5","6\n→"];
kbLayout.ENG[4] = ["Shift","Z","X","C","V","B","N","M","<\n,",">\n.","?\n/","Shift",1.5,"↑",1.5,"1\nEnd","2\n↓","3\nPgDn","Enter"];
kbLayout.ENG[5] = ["Ctrl","Win","Alt","spacebar","Alt","Win","Menu","Ctrl",0.5,"←","↓","→",0.5,"0\nIns",".\nDel"];
kbLayout.ES = [];
kbLayout.ES[1] = ['º','1','2','3','4','5','6','7','8','9','0','p','sp','del'];
kbLayout.ES[2] = ['tab','Q','W','E','R','T','Y','U','I','O','P','sp','sp'];
kbLayout.ES[3] = ['bloq','A','S','D','F','G','H','J','K','L','Ñ','sp','int'];
kbLayout.ES[4] = ['shift','<','Z','X','C','V','B','N','M',',','.','-','shift'];
kbLayout.ES[5] = ['ctrl','sp','sp','alt','spacebar','altgr','sp','ctrl'];

var sizekb = function(sizekbwrap){ // get a good keyboard size for the screen. kb=Keyboard.units are pixels.
	if(sizekbwrap>5000){
		kbLayout.widthX=6;
		kbLayout.heightX=6;
	}else if(sizekbwrap>1800){
		kbLayout.widthX=5;
		kbLayout.heightX=5;
	}else if(sizekbwrap>1000){
		kbLayout.widthX=4;
		kbLayout.heightX=4;
	}else if(sizekbwrap>800){
		kbLayout.widthX=3;
		kbLayout.heightX=3;
	}else{
		kbLayout.widthX=2;
		kbLayout.heightX=2;
	}

	//var xs = document.querySelectorAll(".key3d");
	//xs.style.backgroundColor="#f00";


}

var createKeyboard = function (type,sizekbwrap){
	//sizekb(sizekbwrap);
	/*  
	switch(type){  //for future multiple keyboards
		default:
		spanish:
	}
	*/
	//console.log(kbLayout.ENG[3].length);
	document.writeln('<div id="keyboard" class="center">');
	for (var g=0, h=kbLayout.ENG.length;g<h;g++){  //rows
		document.writeln("<div  id='kbRow" + g + "' class='kbRow'>");
		for(var i=0, j=kbLayout.ENG[g].length;i<j;i++){
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
	 document.writeln('	 <div id="k3d'+key+'" class="key3d" onclick="keyPress(event)">');
	 document.writeln('  	<div id="k2d'+key+'" class="key2d">');
	 document.writeln('    		<p class="keylabel">'+key+'</p>');
	 document.writeln(' 	</div>');
	 document.writeln('	 </div>');
	 document.writeln('</div>');
}  
