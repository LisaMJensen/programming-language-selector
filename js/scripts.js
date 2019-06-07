$(document).ready(function() {
 $("form#coderSurvey").submit(function(event) {
     var question1 = parseInt($("#question1 option:selected").val());
     var question2 = parseInt($("#question2 option:selected").val());
     var question3 = parseInt($("#question3 option:selected").val());
     var question4 = parseInt($("#question4 option:selected").val());
     var question5 = parseInt($("#question5 option:selected").val());

     if (!question1 || !question2 || !question3 || !question4 || !question5) {
       alert("Please select an answer for all questions.")
     } else {

       if (question1 === "1" && question2 ==="1" && question3 ==="1" && question4 ==="1" && question5 ==="1") {
         $("#javascript").show();
         $("#cSharp").hide();
         $("#react").hide();
       } else if (question1 === "2" && question2 ==="2" && question3 ==="2" && question4 ==="2" && question5 ==="2") {
         $("#javascript").hide();
         $("#cSharp").show();
         $("#react").hide();
       } else if (question1 === "3" && question2 ==="3" && question3 ==="3" && question4 ==="3" && question5 ==="3") {
         $("#javascript").hide();
         $("#cSharp").show();
         $("#react").hide();
       }
     }





   event.preventDefault();
 });
});
