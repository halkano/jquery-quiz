function check(){
var q1=document.myform.q1.value;
var q2=document.myform.q2.value;
var q3=document.myform.q3.value;
  var q4=document.myform.q4.value;
    var q5=document.myform.q5.value;
    var q6=document.myform.q6.value;
      var q7=document.myform.q7.value;
        var q8=document.myform.q8.value;
var count=0;

if (q1=="b"){
          count++;
}
if (q2=="b"){
          count++;
}
if (q3=="b"){
          count++;
}
if (q4=="a"){
          count++;
}
if (q5=="a"){
          count++;
}
if (q6=="d"){
          count++;
}
if (q7=="b"){
          count++;
}
if (q8=="a"){
          count++;
}
alert("YOU GOT: "+count+" OUT OF 8 MARKS");
}
