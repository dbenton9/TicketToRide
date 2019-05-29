// variables
var numberCompleted;
var numberIncomplete;
var multiplier = [1,2,4,7,10,15];
var finalScore = 0;

// creating completed routes score input boxes
$("#completedRoutes").keyup(function(){
    // removes extraneous input boxes
    $(".completedInput").remove();
    numberCompleted = $("#completedRoutes").val()
    // populates input boxes
    for(i=0; i < numberCompleted; i++){
        let inputBox = $("<input>");
        $("#completed").append(inputBox);
        inputBox.addClass("completedInput");
        inputBox.attr("value", 0);
        inputBox.attr("id", "completed"+i);

    }
});

// creating incomplete route score input boxes
$("#incompleteRoutes").keyup(function(){
    // removes extraneous input boxes
    $(".incompleteInput").remove();
    numberIncomplete = $("#incompleteRoutes").val()
    // populates input boxes
    for(i=0; i < numberIncomplete; i++){    
        let inputBox = $("<input>");
        $("#incomplete").append(inputBox);
        inputBox.addClass("incompleteInput");
        inputBox.attr("value", 0);
        inputBox.attr("id", "incomplete"+i);
    }
});

// Final Calculation
$("#submit").click(function(){
    // ========= IN DEVELOPMENT ==============
    // autofills  empty input boxes
    // if ($("input") == ''){
    //     alert('please fill out all boxes');
    //     $("input").val(0);
    // }
    // ======================================

    // Calculates trains
    for (i = 0; i < 6; i++){
    finalScore = finalScore + $("#l" + i).val()*multiplier[i];
    }
    // Calculates completed routes
    for (i = 0; i < numberCompleted; i++) {
        finalScore = finalScore + parseInt($("#completed" + i).val());
    } 
    // Calculates incomplete routes
    for (i = 0; i < numberIncomplete; i++){
        finalScore = finalScore - parseInt($("#incomplete" + i).val());
    }

    // Text reset (since button is default false)
    $("#finalScore").html("The final score is: ");
    // Final score is displayed
    $("#finalScore").append(finalScore);
    // Reset var finalScore
    finalScore = 0;
    
});