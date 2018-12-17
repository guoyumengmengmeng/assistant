var fabiao=document.forms[0]
fabiao.addEventListener('submit',function(e){
var fabiaocontent=document.getElementsByTagName("input")[2].value;
var face=document.getElementsByTagName("input")[0].value;
var username=document.getElementsByTagName("input")[1].value;
var userpicture=document.getElementsByTagName("input")[3].value;
var ulfirst=document.createElement("ul");
var li1=document.createElement("li");
var li2=document.createElement("li");
var li3=document.createElement("li");
var li1=document.createElement("li");
var li1=document.createElement("li");
var li1=document.createElement("li");
txt1.innerHTML(count);
add.appendChild(txt1);
var txt2=document.createElement("figcaption");
txt2.innerHTML(timetxt);
add.appendChild(txt1);
var txt2=document.createElement("figcaption");
txt2.innerHTML(placetxt);
add.appendChild(txt1);

},false);
































var ads=document.getElementById("addclass-mask");
var adsform=document.getElementById("mask-form");
var adsbutton=document.getElementsByTagName("button")[0];
var hnumber=document.getElementsByTagName("h5");
var add=document.getElementById("content");
var count=1;
window.onload=function(){
  ads.style.display = 'none';
  var x=new Date;
  document.getElementsByTagName("input")[1].innerHTML=x;
}
function addclass(){
  ads.style.display = 'block';
}
  adsform.addEventListener('submit',function(e){
  var classname=document.getElementsByTagName("input")[0].value;
  var timetxt=document.getElementsByTagName("input")[1].value;
  var placetxt=document.getElementsByTagName("input")[2].value;
  var txt1=document.createElement("h5");
  txt1.innerHTML(count);
  add.appendChild(txt1);
  var txt2=document.createElement("figcaption");
  txt2.innerHTML(timetxt);
  add.appendChild(txt1);
  var txt2=document.createElement("figcaption");
  txt2.innerHTML(placetxt);
  add.appendChild(txt1);

},false);
