$(document).ready( function() {

    /*
     * Activated-overlay is primarily for immediate announcements
     * so it's inlined as display: block at ready and then disabled
     * by click afterwards
     */
    $( '.activated-overlay' ).on('click tap',  function(e) {
        e.stopPropagation();
        $(this).fadeOut().css("display","none");
    });

    /*
     * We're going to slide the information down instead of using
     * activated-overlay.
     */
    $( "#main-programs" ).on('click', '.program', function ( e ) {

        // Pre-toggle administrative tasks
        e.stopPropagation(); // stop bubbling dude

        var $pc = $(this).children('.program-content');

        /*
        if ( $pc.is(':visible') ) {
            $(this).children('h2').css("padding","70px");
        }
        else {
            $(this).children('h2').css("padding","5px");
//            window.scrollBy(0,150); // hacky scroll by 150px so the block shows 
        }
        */
        $pc.slideToggle();
    });
});

