// Back-end logic
var inputedAnswers = [],
    scoredPoints = 0;
    questions = ["a-1", "b-2", "c-3", "d-4"];

function pointsCompiler(){
  scoredPoints = inputedAnswers[0] + inputedAnswers[1] + inputedAnswers[2] + inputedAnswers[3];
  return points;
}
// Front-end logic
$(document).ready(function(){
  $(".question").hide();
  $("#Q-1").show();

  $("#batn-1").click(function(){
    if(isNaN($("input:radio[name = a-1]:checked").val())){
      alert("Please answer question 1 to proceed!");
      $(".question").hide();
      $("#Q-1").show();
      return false;
    }else{
      $(".question").hide();
      $("#Q-1").hide();
      $("#Q-2").show();
      return false;
    }
  });
  $("#batn-2-1").click(function(){
   $(".question").hide();
   $("#Q-2").hide();
   $("#Q-1").show();
   return false;
 });
 $("#batn-2-2").click(function(){
   if(isNaN($("input:radio[name = b-2]:checked").val())){
     alert("Please answer question 2 to proceed!");
     $(".question").hide();
     $("#Q-1").hide();
     $("#Q-2").show();
     return false;
   }else{
     $(".question").hide();
     $("#Q-2").hide();
     $("#Q-3").show();
     return false;
   }
 });

 $("#batn-3-1").click(function(){
   $(".question").hide();
   $("#Q-3").hide();
   $("#Q-2").show();
   return false;
 });
 $("#batn-3-2").click(function(){
   if(isNaN($("input:radio[name = c-3]:checked").val())){
     alert("Please answer question 3 to proceed!");
     $(".question").hide();
     $("#Q-2").hide();
     $("#Q-3").show();
     return false;
   }else{
     $(".question").hide();
     $("#Q-3").hide();
     $("#Q-4").show();
     return false;
   }
 });

 $("#batn-4-1").click(function(){
   $(".question").hide();
   $("#Q-4").hide();
   $("#Q-3").show();
   return false;
 });

 $("#batn-4-2").click(function(){
   if(isNaN($("input:radio[name = d-4]:checked").val())){
     alert("Please answer question 4 to submit your answers!");
     $(".question").hide();
     $("#Q-3").hide();
     $("#Q-4").show();
     return false;
   }else{
     $("#fm-1").submit(function(event){
       event.preventDefault();
       questions.forEach(function(question){
         inputedAnswers.push(parseInt($("input:radio[name=" + question + "]:checked").val()));
       });
       pointsCompiler();

       $("#test").hide();
       $("#Q-4").hide();
       $("#output").show();
       $("#points").append(scoredPoints);
     });
   }
 });
});
