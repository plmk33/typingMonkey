/**creates the keyboard in HTML code
  *
  * 
  */

"use strict";

var kbLayout = []; 
kbLayout.constantkb=29; //constant for creating keyboard.  ==(screen_width/key_width) 
kbLayout.keysize=44;    //keysize is 44 by default  used by several functions
kbLayout.windowX=1200;   //size of the window

kbLayout.shadowTop="#ddd";
kbLayout.shadowLeft="#aaa";
kbLayout.shadowBottom="#ccc";
kbLayout.shadowTop="#bbb";
kbLayout.shadowRight="#bbb";

kbLayout.ENG = [];   //English keyboard
kbLayout.ENG[0] = ["Esc",1,"F1","F2","F3","F4",0.5,"F5","F6","F7","F8",0.5,"F9","F10","F11","F12",0.5,"PrtSc","Scroll Lock","Pause<br>Break"];
kbLayout.ENG[1] = ["~<br>`","!<br>1","@<br>2","#<br>3","$<br>4","%<br>5","^<br>6","&<br>7","*<br>8","(<br>9",")<br>0","_<br>-","+<br>=","Backspace",0.5,"Insert","Home","PgUp",0.5,"Num Lock","/","*","-"];
kbLayout.ENG[2] = ["Tab","Q","W","E","R","T","Y","U","I","O","P","{<br>[","}<br>]","|<br>\\",0.5,"Delete","End","PgDn",0.5,"7<br>Home","8<br>&_uarr;","9<br>PgUp","+"]
kbLayout.ENG[3] = ["Caps Lock","A","S","D","F","G","H","J","K","L",":<br>;","&_quot;<br>&_#39;","Enter ",4,"4<br>&_larr;","5_","6<br>&_rarr;"];
kbLayout.ENG[4] = ["Shift","Z","X","C","V","B","N","M","<<br>,","><br>.","?<br>/","Shift ",1.5,"&_uarr;",1.5,"1<br>End","2<br>&_darr;","3<br>PgDn","Enter"];
kbLayout.ENG[5] = ["Ctrl","Win","Alt","_","Alt ","Win ","Menu","Ctrl ",0.5,"&_larr;","&_darr;","&_rarr;",0.5,"0<br>Ins",".<br>Del"];


kbLayout.ES = [];   //ES-ES  keyboard
kbLayout.ES[0] = ["Esc",1,"F1","F2","F3","F4",0.5,"F5","F6","F7","F8",0.5,"F9","F10","F11","F12",0.5,"PrtSc","Scroll Lock","Pause<br>Break"];
kbLayout.ES[1] = ["ª<br>º \\","!<br>1","\'\'<br>2","·<br>3 #","$<br>4 ~","%<br>5","&<br>6 ¬","/<br>7","(<br>8",")<br>9","=<br>0","?<br>\'","¿<br>¡","Backspace",0.5,"Insert","Home","PgUp",0.5,"Num Lock","/","*","-"];
kbLayout.ES[2] = ["Tab","Q","W","E","R","T","Y","U","I","O","P","^<br>` [","*<br>+  ]","aux_es","Enter",0.5,"Delete","End","PgDn",0.5,"7<br>Home","8<br>&_uarr;","9<br>PgUp","+"]
kbLayout.ES[3] = ["Caps Lock","A","S","D","F","G","H","J","K","L","Ñ","¨<br>´ {","Ç<br> } ",4,"4<br>&_larr;","5_","6<br>&_rarr;"];
kbLayout.ES[4] = ["Shift","Z","X","C","V","B","N","M",";<br>,",":<br>.","_<br>-","Shift ",1.5,"&_uarr;",1.5,"1<br>End","2<br>&_darr;","3<br>PgDn","Enter"];
kbLayout.ES[5] = ["Ctrl","Win","Alt","_","Alt ","Win ","Menu","Ctrl ",0.5,"&_larr;","&_darr;","&_rarr;",0.5,"0<br>Ins",".<br>Del"];




function getSizeWindow(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    //var y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    //console.log("x="+x);
    kbLayout.windowX=x;
    kbLayout.keysize = parseInt(kbLayout.windowX/kbLayout.constantkb); 
    return x;
}





var createKeyboard = function (type){
    if (type == "ENG") {   //so far only english kb
        }else {  type="ENG"; }
    getSizeWindow();

    var auxStyle1="style='"+
                  "border-radius:"+kbLayout.keysize/2+"px;"+
                  "padding:"+kbLayout.keysize+"px;"+
                  " ' ";
    var auxStyle2="style='"+
                 "height:"+(kbLayout.keysize+1)+"px;"+
                 " ' "; // for storing the style        
    var kbWrap = document.getElementById('kbWrap');
    kbWrap.innerHTML ='<div id="keyboard" class="center noTextSelection" '+auxStyle1+'></div>'; 
    /*  overwrites content of "keyboard" if reloaded
    * If kb exist previously it overwrites all the content. Looks like it can be improved :
    * http://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    */
    var keyboard=document.getElementById("keyboard");        
//  document.writeln('<div id="keyboard" class="center" '+auxStyle1+'>');
    for (var g=0,h=kbLayout[type].length;g<h;g++){  //rows
        keyboard.innerHTML +=
        ("<div  id='kbRow" + g + "' class='kbRow' "+auxStyle2+" ></div>");
        var kbRow=document.getElementById("kbRow"+g);
//      document.writeln("<div  id='kbRow" + g + "' class='kbRow' "+auxStyle2+" >");
        for(var i=0,j=kbLayout[type][g].length;i<j;i++){
            var aux=kbLayout[type][g][i];
            if(isNaN(aux)){  //convert numbers: They mean the space betwwen the keys
                createKey(aux,kbRow);
            }   
            else{
                emptySpace(aux,kbRow);
            }
        }
    }
    
}



var emptySpace =function(aux,kbRow){
    var auxStyle=" style='width:"+(aux*kbLayout.keysize)+"px;'";
    kbRow.innerHTML+=('<div class="keywrapper empty" '+auxStyle+'></div>');
//  document.writeln('<div class="keywrapper empty" '+auxStyle+'>');
//  document.writeln('</div>');
}
var createKey = function(key,kbRow){
    var aux="",  //for store the style     aux="style='+a +"xxx"+b+" ' ";
    aux2 = "",
    keyHTML=key,  //used for convert key to html readable symbols
    sizeW=kbLayout.keysize,   //sizeW 1= regular key,    sizeW=2 : 2 times  the sizeW of a regular key 
    sizeH=kbLayout.keysize;
    switch(key){
        case "Tab":
            sizeW*=1.5;
            break;
        case "Backspace":
            sizeW*=2;
            break;
        case "|<br>\\":
            sizeW*=1.5;
            break;
        case "Caps Lock":
            sizeW*=1.75;
            break;  
        case "Enter ":  //added an space for distinguishing the two enter keys
            sizeW*=2.25;
            break;
        case "Shift":
            sizeW*=2.25;
            break;  
        case "Shift ": //added an space for distinguishing the two shifts keys
            sizeW*=2.75;
            break;  
        case "Ctrl":
            sizeW*=1.25;
            break;  
        case "Win":
            sizeW*=1.25;
            break;  
        case "Alt":
            sizeW*=1.25;
            break;
        case "Ctrl ":
            sizeW*=1.25;
            break;  
        case "Win ":
            sizeW*=1.25;
            break;  
        case "Alt ":
            sizeW*=1.25;
            break;  
        case "_":
            sizeW*=6.25;
            break;  
        case "Menu":
            sizeW*=1.25;
            break;  
        case "Enter":
            sizeW*=1;
            sizeH*=2;
            break; 
        case "+":
            sizeH*=2;
            break;  
        case "0<br>Ins":
            sizeW*=2;
            break;   
        default:
            break;
    }
    aux=" style=' "+
        "width:"+sizeW+"px;"+
        "height:"+sizeH+"px;"+
        " ' ";
    kbRow.innerHTML+=('<div class="keywrapper full" id="keywrapper'+key+'" '+aux+'></div>');
    var keywrapper=document.getElementById("keywrapper"+key);   /****/
    aux=" style=' "+
        "width:"+(sizeW-1)+";"+
        "border-top:"+kbLayout.shadowTop+" "+parseInt(kbLayout.keysize/10)+"px solid;"+
        "border-left:"+kbLayout.shadowLeft+" "+parseInt(kbLayout.keysize/7)+"px solid;"+
        "border-bottom:"+kbLayout.shadowBottom+" "+parseInt(kbLayout.keysize/5)+"px solid;"+
        "border-right:"+kbLayout.shadowRight+" "+parseInt(kbLayout.keysize/7)+"px solid;"+
        " ' ";  
    aux2=" onmousedown='keypressed(\""+key+"\",1)' onmouseup='keypressed(\""+key+"\",-1)' ";
    keywrapper.innerHTML+=('    <div id="k2d'+key+'" class="key2d" '+aux+aux2+'></div>');
    var key2d=document.getElementById("k2d"+key);
    aux=" style=' "+
        "font-size:"+parseInt(kbLayout.keysize/4)+"px;"+
        "top:"+parseInt(kbLayout.keysize/40)+"px;"+
        "left:"+parseInt(kbLayout.keysize/40)+"px;"+
        " ' ";
    keyHTML=keyHTML.replace(/&_/g,"&");
    key2d.innerHTML+=('         <p class="keylabel" '+aux+'>'+keyHTML+'</p>');
}  


var keypressed = function (key,direction){
    var key=document.getElementById("k2d"+key);
    if (direction==1){   //press
        key.style.top="2px";
        key.style.zIndex="3";
    }else{            //release
        key.style.top="0px";
        key.style.zIndex="6";
    }
}