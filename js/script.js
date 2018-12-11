// Back-end logic
var inputedAnswers = [],
    scoredPoints = 0;
    questions = ["ans-1", "ans-2", "ans-3", "ans-4"];

function pointsCompiler(){
  scoredPoints = inputedAnswers[0] + inputedAnswers[1] + inputedAnswers[2] + inputedAnswers[3];
  return points;
}
// Front-end logic
$(document).ready(function(){
  $(".question").hide();
  $("#q-1").show();

  $("#btn-1").click(function(){
    if(isNaN($("input:radio[name = ans-1]:checked").val())){
      alert("Please answer question 1 to proceed!");
      $(".question").hide();
      $("#q-1").show();
      return false;
    }else{
      $(".question").hide();
      $("#q-1").hide();
      $("#q-2").show();
      return false;
    }
  });
  $("#btn-2-1").click(function(){
   $(".question").hide();
   $("#q-2").hide();
   $("#q-1").show();
   return false;
 });
 $("#btn-2-2").click(function(){
   if(isNaN($("input:radio[name = ans-2]:checked").val())){
     alert("Please answer question 2 to proceed!");
     $(".question").hide();
     $("#q-1").hide();
     $("#q-2").show();
     return false;
   }else{
     $(".question").hide();
     $("#q-2").hide();
     $("#q-3").show();
     return false;
   }
 });

 $("#btn-3-1").click(function(){
   $(".question").hide();
   $("#q-3").hide();
   $("#q-2").show();
   return false;
 });
 $("#btn-3-2").click(function(){
   if(isNaN($("input:radio[name = ans-3]:checked").val())){
     alert("Please answer question 3 to proceed!");
     $(".question").hide();
     $("#q-2").hide();
     $("#q-3").show();
     return false;
   }else{
     $(".question").hide();
     $("#q-3").hide();
     $("#q-4").show();
     return false;
   }
 });

 $("#btn-4-1").click(function(){
   $(".question").hide();
   $("#q-4").hide();
   $("#q-3").show();
   return false;
 });

 $("#btn-4-2").click(function(){
   if(isNaN($("input:radio[name = ans-4]:checked").val())){
     alert("Please answer question 4 to submit your answers!");
     $(".question").hide();
     $("#q-3").hide();
     $("#q-4").show();
     return false;
   }else{
     $("#fm-1").submit(function(event){
       event.preventDefault();
       questions.forEach(function(question){
         inputedAnswers.push(parseInt($("input:radio[name=" + question + "]:checked").val()));
       });
       pointsCompiler();

       $("#test").hide();
       $("#q-4").hide();
       $("#output").show();
       $("#points").append(scoredPoints);
     });
   }
 });
});
