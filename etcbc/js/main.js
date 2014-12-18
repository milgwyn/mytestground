$( "#main-programs" ).on('click tap', function ( e ) {
  var id = e.target.id;
  var $el = $('#'+id);

  $el.children('.activated-overlay').fadeIn(300).css("display","block");
//  console.log($el.children('.activated-overlay'));
});

$( '.activated-overlay' ).on('click tap',  function(e) {
   $(this).fadeOut(300).css("display","none");
});

