$(document).ready(function() {
 $("form#coderSurvey").submit(function(event) {
     var question1 = parseInt($("#question1 option:selected").val());
     var question2 = parseInt($("#question2 option:selected").val());
     var question3 = parseInt($("#question3 option:selected").val());
     var question4 = parseInt($("#question4 option:selected").val());
     var question5 = parseInt($("#question5 option:selected").val());

     if (!question1 || !question2 || !question3 || !question4 || !question5) {
       //alert("Please select an answer for all questions.");
       $(".modal").show();
        //if $("#buttonClose").click(function(event) {
         //$(".modal").hide();
       //}
     } else {

       var sum = (question1 + question2 + question3 + question4 + question5)

       if (sum <= 7) { console.log("here");
         $("#javascript").fadeIn(800);
         $("#cSharp").hide();
         $("#react").hide();
       } else if (sum <= 12) {
         $("#javascript").hide();
         $("#cSharp").fadeIn(800);
         $("#react").hide();
       } else {
         $("#javascript").hide();
         $("#cSharp").hide();
         $("#react").fadeIn(800);
       }
     }




   event.preventDefault();
 });
});
