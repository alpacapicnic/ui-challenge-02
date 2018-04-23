'use scrict'

$(function() {

    $( ".input-v" ).change('click', function() {
        var empty = document.getElementById(".input-v").value;
        if (empty === ""){
        document.getElementById("#invalid").innerHTML="Please enter a valid user name...";
        document.getElementById("#invalid").style.color="Red";
        }
    });

    $( ".check" ).click( function() {
        ($this).hide();
        ($this).css('background: url(sprites/form-elements-sprite.png)','no-repeat -381px -239px', 'width: 161px', 'height: 160px')
    });
});