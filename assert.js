/*!
 * assert library - Simple Testing Library
 *
 * Copyright 2013 GNU v2
 *
 * Date: 2013-7-29
 */
(function( global, require, exports, module, undefined ) {

  var assert = function(outcome, description, flag, customLog) {
    // set a default value for parameters
    flag = typeof flag !== 'undefined' ? flag : 'CONSOLE';
    customLog = typeof customLog !== 'undefined' ? customLog : 'CONSOLE';
    console.log("Assert loaded");
    // Abstract out the console.log to allow for log extensibilty.
    var log = console.log;

    var status = (outcome) ? "[PASS]" : "[FAIL]";

    switch(flag) {
      case 'CONSOLE' :
        log(status + " | " + description);
        break;
      case 'ALERT' :
        alert(status + " | " + description);
        break;
    }

    if(status == "[PASS]") {
      return true;
    }
    else {
      return false;
    }
  };

  if(!global.global) {
    // Expose assert to the global object
    global.assert = assert;
  }
  else {
    // export for nodejs
    module.exports = assert;
  }

// Expose assert as an AMD module.
  if ( typeof define === "function" && define.amd ) {
    define( "assert", [], function () { return assert; } );
  }

})(typeof window == "undefined" ? global : window,
    typeof require == "undefined" ? [] : require,
    typeof exports == "undefined" ? [] : exports,
    typeof module == "undefined" ? [] : module
  );
