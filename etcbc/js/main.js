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

        $(this).children('.program-content').slideToggle();
    });
});

