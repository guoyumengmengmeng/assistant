var fabiao=document.forms[0]
fabiao.addEventListener('submit',function(e){
  var face=document.getElementsByTagName("input")[0].value;
  var username=document.getElementsByTagName("input")[1].value;
  var fabiaocontent=document.getElementsByTagName("input")[2].value;
  var userpicture=document.getElementsByTagName("input")[3].value;

  let entry = new Entry({
    avatar: face,
    name: username,
    text: fabiaocontent,
    photo: userpicture
  })
  entry.generateDOM()
  
},false);

class Entry {
  constructor (arg) {
    this.avatar = arg.avatar
    this.name = arg.name
    this.text = arg.text
    this.photo = arg.photo
  }
  generateDOM () {
    let ul = document.createElement("ul")

    let avatar = document.createElement("li")
    let name = document.createElement("li")
    let text = document.createElement("li")
    let photo = document.createElement("li")

    avatar.innerText = this.avatar
    name.innerText = this.name
    text.innerText = this.text
    photo.innerText = this.photo

    ul.appendChild(avatar)
    ul.appendChild(name)
    ul.appendChild(text)
    ul.appendChild(photo)

    document.getElementsByTagName('main')[0].appendChild(ul)
  }
}






























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
