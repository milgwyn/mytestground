$(document).ready( function() {

    $( "#main-programs" ).on('click', '.program', function ( e ) {

        // Pre-toggle administrative tasks
        e.stopPropagation(); // stop bubbling dude
        $('.activated-overlay').css("display", "none");

        $(this).children('.activated-overlay').fadeToggle();
    });


    $( '.activated-overlay' ).on('click tap',  function(e) {
        e.stopPropagation();
        $(this).fadeOut(300).css("display","none");
    });

}

