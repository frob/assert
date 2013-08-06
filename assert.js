/*!
 * assert library - Simple Testing Library
 *
 * Copyright 2013 GNU v2
 *
 * Date: 2013-7-29
 */
(function( window, undefined ) {

  var assert = function( outcome, description ) {
    var status = (outcome) ? "[PASS] | " : "[FAIL] | ";
    console.log(status + description);

    return 1;
  };

// Expose assert to the global object
window.assert = assert;

// Expose assert as an AMD module.
if ( typeof define === "function" && define.amd ) {
  define( "assert", [], function () { return assert; } );
}

})( window );
