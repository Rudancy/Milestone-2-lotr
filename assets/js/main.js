$(document).ready(function() { 


    // start of ring sequence 
    $("#the-ring").click(function() {
        $("#the-ring-quote-1st-line").fadeIn(1000, function() {
            $("#the-ring-quote-2nd-line").fadeIn(1000, function() {
                $("#the-ring-quote-3rd-line").fadeIn(1000, function() {
                    $("#the-ring-quote-4th-line").fadeIn(1000)
                });
            });
        });
    });

    //ring sequence finished
    
    
});
