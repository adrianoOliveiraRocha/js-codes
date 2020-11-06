var myModule = (function() {
  'use strict';

  var _privateProperty = 'Hello world!';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  return {
    publicMethod() {
      _privateMethod();
    }
  };

})();

myModule.publicMethod();
console.log(myModule._privateProperty);
myModule._privateMethod();



