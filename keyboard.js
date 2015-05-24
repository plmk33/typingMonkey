/* will create the keyboard on html*/

"use strict";

var createKeyboard = function(type){
	/*  
	switch(type){  //for future multiple keyboards
		default:
		spanish:
	}
	*/
	createKey("A");
	createKey("S");


}

var createKey = function(key){
/*
		<div class="key3d">
			<div id="k65" class="key2d">
				<p class="keylabel">
					A
				</p>
			</div>
		</div>
*/
	 document.writeln('<div class="key3d" onclick="keyPress(event)">');
	 document.writeln('  <div id="k'+key+'" class="key2d">');
	 document.writeln('    <p class="keylabel">'+key+'</p>');
	 document.writeln('  </div>');
	 document.writeln('</div>');
}  
