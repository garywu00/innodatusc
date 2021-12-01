function gdesign() {
    $( "#gdesign-button" ).removeClass( "button_unpressed" ).addClass( "button_pressed" );;
    $( "#wdesign-button" ).removeClass( "button_pressed" ).addClass( "button_unpressed" );
    $( "#photo-button" ).removeClass( "button_pressed" ).addClass( "button_unpressed" );;

    console.log("SHIT");

    $("#gdesign-row").css("display","block");
    $("#wdesign-row").css("display","none");
    $("#photo-row").css("display","none");
}

function wdesign() {
    $( "#gdesign-button" ).removeClass( "button_pressed" ).addClass( "button_unpressed" );;
    $( "#wdesign-button" ).removeClass( "button_unpressed" ).addClass( "button_pressed" );
    $( "#photo-button" ).removeClass( "button_pressed" ).addClass( "button_unpressed" );;

    $("#gdesign-row").css("display","none");
    $("#wdesign-row").css("display","block");
    $("#photo-row").css("display","none");
}

function photo() {
    $( "#gdesign-button" ).removeClass( "button_pressed" ).addClass( "button_unpressed" );;
    $( "#wdesign-button" ).removeClass( "button_pressed" ).addClass( "button_unpressed" );
    $( "#photo-button" ).removeClass( "button_unpressed" ).addClass( "button_pressed" );;

    $("#gdesign-row").css("display","none");
    $("#wdesign-row").css("display","none");
    $("#photo-row").css("display","block");
}