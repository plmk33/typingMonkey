"strict mode";

var exercise=[];
exercise["testlong"]="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
exercise["testshort"]="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..";

var createText = function(level){
	/* switch (level){}*/
	var wrapText=document.getElementById("textWrap");
	wrapText.innerHTML=("<p class='textExercise textA'>"+exercise['testshort']+"</p>"+
						"<p class='textExercise textB'>"+"Lorem ipsum dolor sit am"+"</p>"
						);


}
