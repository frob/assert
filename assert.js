/*!
 * assert library - Simple Testing Library
 *
 * Copyright 2013 GNU v2
 *
 * Date: 2013-7-29
 */
(function( window, undefined ) {

  var assert = function( outcome, description, log) {
    // set a default value for log parameter
    a = typeof a !== 'undefined' ? a : true;

    var status = (outcome) ? "[PASS]" : "[FAIL]";

    if(log) {
      console.log(status + " | " description);
    }

    if(status == "[PASS]") {
      return true;
    }
    else {
      return false;
    }
  };

// Expose assert to the global object
window.assert = assert;

// Expose assert as an AMD module.
if ( typeof define === "function" && define.amd ) {
  define( "assert", [], function () { return assert; } );
}

})( window );
