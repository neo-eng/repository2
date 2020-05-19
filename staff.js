function myFunc(){
  var myTbl     = new Array("日","月","火","水","木","金","土");
  var myD       = new Date();

  var myYear    = myD.getFullYear();
  var myMonth   = myD.getMonth() + 1;
  var myDate    = myD.getDate();
  var myDay     = myD.getDay();
  var myHours   = myD.getHours();
  var myMinutes = myD.getMinutes();
  var mySeconds = myD.getSeconds();

  var myMess = myYear + "年" + myMonth + "月" + myDate + "日" + myTbl[myDay] + "曜日" + myHours + "時" + myMinutes + "分" + mySeconds + "秒";
  document.myForm.myFormDate.value = myMess;
}