let ads=document.getElementById("addclass-mask");
let adsform=document.getElementById("mask-form");
let adsbutton=document.getElementsByTagName("button")[0];
let hnumber=document.getElementsByTagName("h5");
let add=document.getElementsByTagName("main");
let count=1;
window.onload=function(){
  ads.style.display = 'none';
}
function addclass(){
  ads.style.display = 'block';
}
function over(){
  ads.style.display = 'none';
}
  adsform.addEventListener('submit',function(e){
  e.preventDefault();
  let classname=document.getElementsByTagName("input")[0].value;
  let weektxt=document.getElementsByTagName("select")[0].value;
  let timetxt=document.getElementsByTagName("select")[1].value;
  let placetxt=document.getElementsByTagName("input")[1].value;
  let str=weektxt+timetxt;
  let addClass=document.getElementsByClassName("cover");
  for(let i=0;i<addClass.length;i++){
    let attributes=addClass[i].getAttribute('data-name')
    console.log(attributes);
    if(attributes==str)
    {
        console.log(attributes);
      if(addClass[i].innerHTML==="")
      {
        addClass[i].innerHTML=classname+placetxt;
        console.log(classname+placetxt);
        console.log(addClass[i].innerHTML);
      }
      else{
        let confirms=confirm("该时间已有课程存在确定覆盖吗？");
        if(confirms)
        {
          addClass[i].innerHTML=classname+placetxt;
        }
      }
    }
  }
  ads.style.display = 'none';
  // if(addclass)
  // let txt1=document.createElement("h5");
  // txt1.innerHTML(count);
  // add.appendChild(txt1);
  // let txt2=document.createElement("figcaption");
  // txt2.innerHTML(timetxt);
  // add.appendChild(txt1);
  // let txt2=document.createElement("figcaption");
  // txt2.innerHTML(placetxt);
  // add.appendChild(txt1);

},false);
