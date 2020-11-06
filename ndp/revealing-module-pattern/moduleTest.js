const moduleTest = (() => {
  // This attribute are privated
  const privateFoo = () => { return 'privateFoo' };
  const privateBar = [1, 2, 3, 4, 5];
  // This attribute are public
  const exported = {
    publicFoo: () => { return 'That is my public function'; },
    publicBar: (n, m) => { return n * m; }
  };

  return exported;

})();

module.exports.moduleTest = moduleTest;