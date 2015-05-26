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

kbLayout.ENG = [];
kbLayout.ENG[0] = ["Esc",1,"F1","F2","F3","F4",0.5,"F5","F6","F7","F8",0.5,"F9","F10","F11","F12",0.5,"PrtSc","Scroll Lock","Pause<br>Break"];
kbLayout.ENG[1] = ["~<br>`","!<br>1","@<br>2","#<br>3","$<br>4","%<br>5","^<br>6","&<br>7","*<br>8","(<br>9",")<br>0","_<br>-","+<br>=","Backspace",0.5,"Insert","Home","PgUp",0.5,"Num Lock","/","*","-"];
kbLayout.ENG[2] = ["Tab","Q","W","E","R","T","Y","U","I","O","P","{<br>[","}<br>]","|<br>\\",0.5,"Delete","End","PgDn",0.5,"7<br>Home","8<br>&_uarr;","9<br>PgUp","+"]
kbLayout.ENG[3] = ["Caps Lock","A","S","D","F","G","H","J","K","L",":<br>;","\'\'<br>\'","Enter ",4,"4<br>&_larr;","5_","6<br>&_rarr;"];
kbLayout.ENG[4] = ["Shift","Z","X","C","V","B","N","M","<<br>,","><br>.","?<br>/","Shift ",1.5,"&_uarr;",1.5,"1<br>End","2<br>&_darr;","3<br>PgDn","Enter"];
kbLayout.ENG[5] = ["Ctrl","Win","Alt","_","Alt","Win","Menu","Ctrl",0.5,"&_larr;","&_darr;","&_rarr;",0.5,"0<br>Ins",".<br>Del"];

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
    kbWrap.innerHTML +='<div id="keyboard" class="center" '+auxStyle1+'></div>'; 
    var keyboard=document.getElementById("keyboard");        
//  document.writeln('<div id="keyboard" class="center" '+auxStyle1+'>');
    for (var g=0,h=kbLayout[type].length;g<h;g++){  //rows
        keyboard.innerHTML +=("<div  id='kbRow" + g + "' class='kbRow' "+auxStyle2+" ></div>");
        var kbRow=document.getElementById("kbRow"+g);
//      document.writeln("<div  id='kbRow" + g + "' class='kbRow' "+auxStyle2+" >");
        for(var i=0,j=kbLayout[type][g].length;i<j;i++){
            var aux=kbLayout[type][g][i];
            if(isNaN(aux)){  //convert number to spaces between keys. This spaces are record as numbers
                createKey(aux,kbRow);
            }   
            else{
                emptySpace(aux,kbRow);
            }
            //createKey(aux);
        }
    //  document.writeln("</div>");
    }
//  document.writeln("</div>");
    
}



var emptySpace =function(aux,kbRow){
    var auxStyle=" style='width:"+(aux*kbLayout.keysize)+"px;'";
    kbRow.innerHTML+=('<div class="keywrapper empty" '+auxStyle+'></div>');
//  document.writeln('<div class="keywrapper empty" '+auxStyle+'>');
//  document.writeln('</div>');
}
var createKey = function(key,kbRow){
    var aux="",  //for store the style     aux="style='+a +"xxx"+b+" ' ";
    sizeW=1,   //sizeW 1= regular key,    sizeW=2 : 2 times  the sizeW of a regular key 
    sizeH=1;
    switch(key){
        case "Tab":
            sizeW=1.5;
            break;
        case "Backspace":
            sizeW=2;
            break;
        case "|<br>\\":
            sizeW=1.5;
            break;
        case "Caps Lock":
            sizeW=1.75;
            break;  
        case "Enter ":  //added an space for distinguishing the two enter keys
            sizeW=2.25;
            break;
        case "Shift":
            sizeW=2.25;
            break;  
        case "Shift ": //added an space for distinguishing the two shifts keys
            sizeW=2.75;
            break;  
        case "Ctrl":
            sizeW=1.25;
            break;  
        case "Win":
            sizeW=1.25;
            break;  
        case "Alt":
            sizeW=1.25;
            break;  
        case "_":
            sizeW=6.25;
            break;  
        case "Menu":
            sizeW=1.25;
            break;  
        case "Enter":
            sizeW=1;
            break;  
        default:
            break;
    }
    aux=" style=' "+
        "width:"+(sizeW*kbLayout.keysize)+"px;"+
        "height:"+(sizeH*kbLayout.keysize)+"px;"+
        " ' ";
    kbRow.innerHTML+=('<div class="keywrapper full" id="keywrapper'+key+'" '+aux+'></div>');
    var keywrapper=document.getElementById("keywrapper"+key);   /****/
//  document.writeln('<div class="keywrapper full" '+aux+'>');
    aux=" style=' "+
        "border-top:"+kbLayout.shadowTop+" "+parseInt(kbLayout.keysize/10)+"px solid;"+
        "border-left:"+kbLayout.shadowLeft+" "+parseInt(kbLayout.keysize/7)+"px solid;"+
        "border-bottom:"+kbLayout.shadowBottom+" "+parseInt(kbLayout.keysize/5)+"px solid;"+
        "border-right:"+kbLayout.shadowRight+" "+parseInt(kbLayout.keysize/7)+"px solid;"+
        " ' ";  
    keywrapper.innerHTML+=('    <div id="k2d'+key+'" class="key2d" '+aux+'></div>');
    var key2d=document.getElementById("k2d"+key);
//  document.writeln('      <div id="k2d'+key+'" class="key2d" '+aux+'>');
    aux=" style=' "+
        "font-size:"+parseInt(kbLayout.keysize/4)+"px;"+
        "top:"+parseInt(kbLayout.keysize/40)+"px;"+
        "left:"+parseInt(kbLayout.keysize/40)+"px;"+
        " ' ";
    key2d.innerHTML+=('         <p class="keylabel" '+aux+'>'+key+'</p>');
//  document.writeln('          <p class="keylabel" '+aux+'>'+key+'</p>');
//  document.writeln('  </div>');
    //document.writeln('     </div>');
//  document.writeln('</div>');
}  
