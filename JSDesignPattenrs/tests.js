var BaseModule = (function() {
  'use strict';

  var _name;
  var _age;

  return {
    setName(name) {
      _name = name;
    },

    getName() {
      return _name;
    },

    setAge(age) {
      _age = age;
    },

    getAge() {
      return _age;
    }
  }

})();

var baseMethods = {
  otherPublicMethod() {
    return 'other public method';
  }
}

function mixin(module, baseMethods) {
  Object.keys(baseMethods).forEach(key => {
    if(!(key in module)) {
      module[key] = baseMethods[key];
    }
  })
  return module;
}

var Module1 = mixin(BaseModule, baseMethods);

console.log(Module1);

