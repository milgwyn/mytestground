$(document).ready( function() {
    
    $( '.activated-overlay' ).on('click tap',  function(e) {
        e.stopPropagation();
        $(this).fadeOut().css("display","none");
    });

    alert("jquery test.js");
    
    $( "#main-programs" ).on('click', '.program', function ( e ) {

        // Pre-toggle administrative tasks
        e.stopPropagation(); // stop bubbling dude

        var $pc = $(this).children('.program-content');

        $pc.slideToggle();
    });
});

