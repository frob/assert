/*!
 * assert library - Simple Testing Library
 *
 * Copyright 2013 GNU v2
 *
 * Date: 2013-7-29
 */
(function( window, undefined ) {

  var assert = function( outcome, description, flag, customLog) {
    // set a default value for parameters
    flag = typeof flag !== 'undefined' ? flag : 'CONSOLE';
    customLog = typeof customLog !== 'undefined' ? customLog : 'CONSOLE';

    // Abstract out the console.log to allow for log extensibilty.
    var log = console.log;

    var status = (outcome) ? "[PASS]" : "[FAIL]";

    if(flag == 'CONSOLE') {
      log(status + " | " + description);
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
