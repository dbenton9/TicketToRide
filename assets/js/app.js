// variables
var numberCompleted;
var numberIncomplete;
var multiplier = [1,2,4,7,10,15];
var finalScore = 0;

// function on click then select feature for input boxes
$("input").click(function() {
    this.select(); 
});

// loading different tabs
$(".tablinks").click(function(){
    console.log()
    var i, tabcontent, tablinks, currentId;
    tabcontent = $(".tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".tablinks")
    // adding active class for styling to link
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    switch(this.id){
        case "trainslink":
            $("#trains").css('display', 'block');
            break;
        case "routeslink":
            $("#routes").css('display', 'block');
            break;
    }
})

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
        inputBox.attr("onClick", "this.select()");
        inputBox.attr("type", "number")
        inputBox.attr("pattern", "[0-9]*")
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
        inputBox.attr("onClick", "this.select()");
        inputBox.attr("type", "number");
        inputBox.attr("pattern", "[0-9]*")
    }
});

// Reset
$("#reset").click(function(){
    $("#finalScore").html("The total score is: 0");
    $(".completedInput").remove();
    $(".incompleteInput").remove();
})

// Final Calculation
$("body").on('keyup', 'input', function(){
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
    $("#finalScore").html("The total score is: ");
    // Final score is displayed
    $("#finalScore").append(finalScore);
    // Reset var finalScore
    finalScore = 0;
});