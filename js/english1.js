// window.onload=init();
var word=['electricity','revenue','smash','scorn','stack','temperament','threshold','transition','penalty','pledge','premise','prescription','prestige','instinct','integrity','intuition','lease','legislation','manifestation','notion','opponent','ornament','blunder'];
var translate=['n.电力','n. 税收，岁入' ,'n. 轻蔑，鄙视' ,'n. 打碎，粉碎' ,'n. 堆，一堆' ,'n. 气质，性格' ,'n. 开端，入口','n. 过渡，转变' ,'n. 制裁，惩罚' ,'n. 保证，誓言' ,'n. 前提，假设' ,'n. 处方' ,'n. 威信，威望' ,'n. 本能，直觉' ,'n. 正直，诚实' ,'n. 直觉' ,'n. 租约，契约' ,'n. 立法，法律' ,'n. 表现(形式)' ,'n. 概念，观念，理解' ,'n. 敌人，对手' ,'n. 装饰，装饰品' ,'n. 错误，大错'];
// console.log(word.length,translate.length);
var score=0;
var options=document.getElementsByClassName('option');
//将fanyi这个数组随机分布
function shuffle (fanyi) {
  fanyi.sort(() => Math.random() - 0.5)
  // var is=4;
  // while(is--){
  //   var j=Math.round(Math.random()*(is));
  //   [fanyi[is],fanyi[j]]=[fanyi[j],fanyi[is]];
  // }
}
//初始化 先选5个单词到questions中
var questions=[];
var hash1={};
function init(){
    while(questions.length<=5) {
      var temp=Math.round(Math.random()*(word.length-1));
      if(!hash1[temp]) {
        questions.push(temp);
        hash1[temp]=1;
      }
    }
   loadQuestion();
  }
  //倒计时
var timeRemaining;
function timesout(){
  timeRemaining--;
  var txt=document.getElementsByClassName("time")[0];
  txt.innerHTML=timeRemaining;
}

var i=0;

function loadQuestion(){
  timeRemaining=5;
  setInterval(timesout,1000);
  var wword=questions[i];//wword是所选单词的序号第i个单词
  var fanyi=[];
  var hash2={};
  fanyi.push(questions[i]); // questions[i]是答案的序号，放到fanyi数组中
  hash2[questions[i]]=1;
  //除了答案 fanyi数组中还推入四个随机的数
  while(fanyi.length<4){
    var tempp=Math.round(Math.random()*(word.length-1));
    if(!hash2[tempp]){
      fanyi.push(tempp);
      hash2[tempp]=1;
    }
  }
  //页面的内容显示出来
  var xuhao=document.getElementById('xuhao');
  xuhao.innerHTML=`第 ${i + 1} 题`;
  var danci=document.getElementById('danci');
  danci.innerHTML=word[wword];
  shuffle(fanyi);//wword是所选单词的序号；让fanyi这个数组随机乱序
  // shuffle(wword,fanyi);//wword是所选单词的序号；让fanyi这个数组随机乱序
  // fanyi这个数组是下面翻译的序号们
  for(var z=0;z<4;z++){
    options[z].innerHTML=translate[fanyi[z]];
    if(translate[fanyi[z]]==translate[wword]){
      options[z].value=0;
    }
    else{
      options[z].value=1;
    }}
  }


function Jjudge(){
  var score=document.getElementsByClassName("sign1")[0];
  if(this.value==0){
    score++;
    score.queryselect("span").innerHTML=score+" 分";
  }
  else{
    if(i++<=5) {
      // loadQuestion();
      loadQuestion();
    }
    else if(i>5) {
      if(score>=3){
      alert("恭喜！！！你获得胜利");
    }
  }
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
