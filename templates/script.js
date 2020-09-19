var $ = jQuery.noConflict();
    $(function() {
        var testNumLength = function(number) {
            if (number.length > 9) {
                outPutDisplay.val(number.substr(number.length-9,9));
                if (number.length > 15) {
                    number = "";
                    outPutDisplay.val("Err");
                }
            } else {
                return number;
            }
        };
        var number = "";
        var operator = "";
        var operatorList = ['×','÷','−','+'];
        var outPutDisplay = $("#output");
        $(".calc-button").not("#clear,#equals,.operator").click(function(){
            outPutDisplay.val(outPutDisplay.val() + $(this).text());
            testNumLength(number);
        });
        $(".operator").not("#equals").click(function(){
            operator = $(this).text();
            if (operatorList.indexOf(outPutDisplay.val().slice(-1)) != -1 ) {
                outPutDisplay.val(outPutDisplay.val().slice(0, -1) + operator);
            } else {
                outPutDisplay.val(outPutDisplay.val()+operator);
            }
        });
        $("#clear").click(function(){
            number = "";
            outPutDisplay.val("");
        });
        $('#equals').click(function(){
            // var replaced = outPutDisplay.val().replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/\+/g, "+");
            // outPutDisplay.val(testNumLength(eval(replaced)));
            //INSTEAD SEND USER TO ANOTHER PAGE
            window.location.href = "meme.html";
        })
        $(document).keydown(function(event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode === 49) {
                $("#one").click();
            } else if (keycode === 50) {
                $("#two").click();
            } else if (keycode === 51) {
                $("#three").click();
            } else if (keycode === 52) {
                $("#four").click();
            } else if (keycode === 53) {
                $("#five").click();
            } else if (keycode === 54) {
                $("#six").click();
            } else if (keycode === 55) {
                $("#seven").click();
            } else if (keycode === 56) {
                $("#eight").click();
            } else if (keycode === 57) {
                $("#nine").click();
            } else if (keycode === 48) {
                $("#zero").click();
            } else if (keycode === 99) {
                $("#clear").click();
            } else if (keycode === 13 || keycode === 187) {
                $("#equals").click();
            } else if (keycode === 107) {
                $("#plus").click();
            } else if (keycode === 109) {
                $("#minus").click();
            } else if (keycode === 106 || keycode === 120) {
                $("#times").click();
            } else if (keycode === 111) {
                $("#divide").click();
            } else if (keycode === 27) {
                $("#clear").click();
            } else if (keycode === 8) {
                outPutDisplay.val(outPutDisplay.val().slice(0, -1));
            }
        });
    });


    /*---------------------------------------------------------------------------------------------*/

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

    request.onload = function () {
    // Begin accessing JSON data here
    }

    // Send request
    request.send()

    
