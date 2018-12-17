var ads=document.getElementById("addclass-mask");
var adsform=document.getElementById("mask-form");
var adsbutton=document.getElementsByTagName("button")[0];
var hnumber=document.getElementsByTagName("h5");
var add=document.getElementsByTagName("main");
var count=1;
window.onload=function(){
  ads.style.display = 'none';
}
function addclass(){
  ads.style.display = 'block';
}
  adsform.addEventListener('submit',function(e){
  var classname=document.getElementsByTagName("input")[0].value;
  var weektxt=document.getElementsByTagName("select")[0].value;
  var placetxt=document.getElementsByTagName("input")[1].value;
  var timetxt=document.getElementsByTagName("select")[1].value;
  var str=weektxt+""+timetxt;
  var addClass=document.getElementsByClassName("cover");
  for(var i=0;i<addClass.length;i++){
    if(addClass[i].value==str)
    {
      if(addClass[i].innerHTML==NULL)
      {
        addClass[i].innerHTML=classname+"@"+placetxt;
      }
      else{
        var confirm=confirm("该时间已有课程存在确定覆盖吗？");
        if(confirm)
        {
          addClass[i].innerHTML=classname+"@"+placetxt;
        }
      }
    }
  }
  // if(addclass)
  // var txt1=document.createElement("h5");
  // txt1.innerHTML(count);
  // add.appendChild(txt1);
  // var txt2=document.createElement("figcaption");
  // txt2.innerHTML(timetxt);
  // add.appendChild(txt1);
  // var txt2=document.createElement("figcaption");
  // txt2.innerHTML(placetxt);
  // add.appendChild(txt1);

},false);
