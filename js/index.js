var x=document.getElementById('user');
var y=document.getElementById('password');
var z1=document.getElementById('buttons')
var forms=document.getElementById('fform')
// var z2=document.getElementsByClassName('buttons')[1];
var flag=0;
x.onblur=function(){
    var reg=/^\w{11}$/;
  if(!(reg.test(this.value))){
    alert("❌ 学号为11位数字");
  }
  else{
  flag=1;
  }
}
console.log(flag);
forms.addEventListener("submit",function(e){
  e.preventDefault();
  //教务处验证
if(flag){
  location.href="main.html";
}
},false);
