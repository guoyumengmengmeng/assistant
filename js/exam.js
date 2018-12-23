let ads=document.getElementById("addclass-mask");
let adsform=document.getElementById("mask-form");
let adsbutton=document.getElementsByTagName("button")[0];
let hnumber=document.getElementsByTagName("h5");
let add=document.getElementById("content");
let count=1;

function prefix (num) {
  return num.toString().length < 2 ? `0${num}` : num
}

function toLocalTime (date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    day: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

window.onload=function(){
  ads.style.display = 'none';
  let localTime = toLocalTime(new Date())
  // console.log(localTime)
  for (let attr in localTime) {
    attr = prefix(attr)
  }
  document.getElementsByTagName("input")[1].value = `${localTime.year}-${localTime.month}-${localTime.date}T${localTime.hour}:${localTime.minute}`
}
function addclass(){
  ads.style.display = 'block';
}
  adsform.addEventListener('submit',function(e){
    e.preventDefault()
  let classname=document.getElementsByTagName("input")[0].value;
  let timetxt=document.getElementsByTagName("input")[1].value;
  let selectedDate = toLocalTime(new Date(timetxt))
  let dateStr = `${selectedDate.year}年${selectedDate.month}月${selectedDate.date}日${dayToWeekday(selectedDate.day)}${selectedDate.hour}:${selectedDate.minute}`

  let placetxt=document.getElementsByTagName("input")[2].value;
  let txt1=document.createElement("h5");
  txt1.innerHTML = count;
  add.appendChild(txt1);
  console.log('success')
  let lessonName=document.createElement("figcaption");
  lessonName.innerText = classname
  add.appendChild(lessonName)
  let txt2=document.createElement("figcaption");
  txt2.innerHTML = dateStr;
  add.appendChild(txt2);
  let txt3=document.createElement("figcaption");
  txt3.innerHTML = placetxt;
  add.appendChild(txt3);
  ads.style.display = 'none';
},false);

let weekdays = '周一，周二，周三，周四，周五，周六，周日'.split('，')
function dayToWeekday (day) {
  return weekdays[day - 1]
}
function over(){
  ads.style.display = 'none';
}
