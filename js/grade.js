var grades=document.getElementsByTagName("input");
var selectgrade=document.getElementById("selectgrade");
var selectjidian=document.getElementById("selectjidian");
var selectavg=document.getElementById("selectavg");
// function selectssall(){
//   for (var grad in grades) {
//     grad.checked='true';
// }}
function selectssall(){
var flag=0;
for(var i=0;i<grades.length;i++){
  if(grades[i].checked == false)
  {
    grades[i].checked =true;
    flag=1;
  }
}
if(flag==0)
{
  for(var ii=0;ii<grades.length;ii++){
    grades[ii].checked = false;
}
}
}
function selectssnone(){
for(var j=0;j<grades.length;j++){
  if(grades[j].checked == false){
    grades[j].checked =true;
  }
  else {
    grades[j].checked =false;
  }
}
}
function compute(){
  var totalGrade=0;
  var totalxuefen=0;
  var totaljidian=0;
  var avg=0,avgjidian=0;
  var count=0;
  for (var grade in grades) {
    if(grade.checked=='true'){
      totalGrade+=this.nextsibling.value;
      totalxuefen+=this.nextsibling.nextsibling.nextsibling.value;
      totaljidian+=this.nextsibling.nextsibling.nextsibling.nextsibling.value;
      count++;
    }
  }
  console.log(totalGrade,totalxuefen,count,totaljidian);
  avg=totalGrade/count;
  avg=avg.toFixed(3);
  avgjidian=totaljidian/count;
  avgjidian=avgjidian.toFixed(3);
  selectgrade.innerHTML="当前选择学分："+totalxuefen;
  selectjidian.innerHTML="绩点："+avgjidian;
  selectgrade.innerHTM="加权："+avg;
}
