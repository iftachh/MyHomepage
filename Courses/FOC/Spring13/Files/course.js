
 var menu='<img src="Files/tau-cs3.jpg" width="899" height="128" alt="" />'+
'<table cellpadding=0 cellspacing=0 border=0 class=reka_tab width=900 id=main_menu>'+
'<tr><tbody class=text>'+
'<td class=reka align=center ><ul id=menu>'+
'<li ><a href="index.html" >Home</a></li>'+
'<li><a href="prerequisite.html" >Prerequisite</a></li>'+
'<li><a href="requirements.html" >Course requirements</a></li>'+
'<li><a href="schedule.html" >Schedule and Slides</a></li>'+
'<li><a href=" sets.html" >Problem Sets</a></li>'+
'<li   style="background-image : none"><a href="readings.html"  >Readings</a></li>'+
'</ul></td><td style="width : 3px""></td></tr></table>'


function select_menu () {
 var page=window.location.href ;


var obj2=document.getElementById("main_menu") ;
var elements2 =  obj2.getElementsByTagName("a");
for (i=0; i <elements2.length ; i++) {
kuku=page.indexOf(elements2[i].href) ;
if (kuku >= 0 )  break  ;
}

if (kuku >= 0 ) {  // top right menu
elements2[i].parentNode.style.backgroundImage="url('Files/reka_selected1.gif')" ;
elements2[i].style.color="white" ; }

}