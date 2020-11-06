var CommunMethods = {
  m1() {
    return 'method 1';
  },

  m2() {
    return 'method 2';
  }
}

function mixin(mainObject, targetObject) {
  Object.keys(mainObject).forEach(key => {
    if(!(key in targetObject)) {
      targetObject[key] = mainObject[key];
    }
  });

  return targetObject;
}

var Class1 = mixin(CommunMethods, {
  m3() {
    return 'method 3';
  }
});

console.log(
  Class1.m1(), '\t', 
  Class1.m2(), '\t',
  Class1.m3(), '\t'
);

var Class2 = mixin(CommunMethods, {
  m4() {
    return 'method 4'
  }
});

console.log(
  Class2.m1(), '\t', 
  Class2.m2(), '\t',
  Class2.m4(), '\t'
);
