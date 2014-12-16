
/* Is it efficient to have an overall full document listener? */

var elShown; // Global value to check for toggle
document.addEventListener('click', toggleOverlay, false);


function toggleOverlay (e) {

   // worthwhile to check for activated-overlay immediately?
   var el = e.target;
   /* Need to handle if the h2 element is clicked */
   if ( el.tagName == "H2" ) {
      el = el.parentNode;
   }

   var overlay  = el.querySelector(".activated-overlay");

   // if elShown is defined because an overlay is active
   // if we can't find an activated-overlay class, presumably because
   // we're clicking on the overlay itself
   if ( elShown && overlay == null ) {
      elShown.querySelector(".activated-overlay").style.display = "none";
      elShown = null;
   }
   else if ( !elShown && el) { // inefficient
    
      if (overlay) {
         elShown = el;
         overlay.style.display = "initial";
      }
      else if ( el.id == "warning" ) {
         el.style.display = "none"
      }
   }
}
