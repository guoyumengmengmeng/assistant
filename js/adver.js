var count=3;
function timeout() {
  count--;
  if(count==0)
  {
    location.href="index.html";
  }
  console.log(count);
  setTimeout("timeout()", 1000);
}
timeout();
