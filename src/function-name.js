if (typeof FEATURE_NO_IE === 'undefined') {
  if ( 'name' in Function.prototype === false ) {

    // Missing in IE
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

    Object.defineProperty( Function.prototype, 'name', {

        get: function () {

            return this.toString().match( /^\s*function\s*([^\(\s]*)/ )[ 1 ];

        }

    } );
  }
  /* // Fix Function#name on browsers that do not support it (IE):
  function test() {}

  // Fix: don't shorten to `!test.name` as minifiers may remove the `test` function name,
  // which results in `test.name === ''`, which is falsy.
  // was having issues with this polyfil in ie 11

  // Missing in IE
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

  if (test.name === undefined) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function() {
        let name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
        // For better performance only parse once, and then cache the
        // result through a new accessor for repeated access.
        Object.defineProperty(this, 'name', { value: name });
        return name;
      }
    });
  }*/
}
