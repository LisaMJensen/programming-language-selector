$(document).ready(function() {
 $("#coderSurvey").submit(function(event) {
     var question1 = ($("#question1 option:selected").val());
     var question2 = ($("#question2 option:selected").val());
     var question3 = ($("#question3 option:selected").val());
     var question4 = ($("#question4 option:selected").val());
     var question5 = ($("#question5 option:selected").val());

     if (!question1 || !question2 || !question3 || !question4 || !question5) {
       alert("Please select an answer for all questions.")
     } else {

       if ()
     }






   event.preventDefault();
 });
});
