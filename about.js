function team_toggle(id) {

    for (let i = 1; i < 7; i++){
        //console.log(i)
        if(i == id){
            $( '#' + i ).removeClass( "button_unpressed" ).addClass( "button_pressed" );;
            $('#container-' + i ).css("display","block");
        }
        else{
            $( '#' + i ).removeClass( "button_pressed" ).addClass( "button_unpressed" );;
            $('#container-' + i ).css("display","none");
        }
    }
}