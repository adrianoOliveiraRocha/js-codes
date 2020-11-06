
const make3 = (a, b, c) => String(100 * a + 10 * b + c);

const make3curried = a => b => c => String(100 * a + 10 * b + c)

function make3curried2(a) {
  return function(b) {
    return function(c) {
      return String(100 * a + 10 * b + c);
    }
  }
};

function addVAT(rate, amount) {
  return amount * (1 + rate / 100)
}
console.log(addVAT(20, 500))
console.log(addVAT(15, 200))


function addVATcurried(rate) {
  return function(amount) {
    return amount * (1 + rate / 100);
  }
};

const addNationalVAT = addVATcurried(6);
console.log(addNationalVAT(1500))



const curryByBind = fn =>
  fn.length === 0 ? fn() : p => curryByBind(fn.bind(null, p))

function curryByBind (fn, len = fn.length) {
  return (len === 0 ? fn() : p => curryByBind(fn.bind(null, p), len - 1))
}

function make3(a, b, c) {
  return String(100 * a + 10 * b + c)
}

const f1 = curryByBind(make3)
const f2 = f1(6)
const f3 = f2(5)
const f4 = f3(8)
console.log(f4)

const nosense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`
const fix2and5 = (a, c, d) => nosense(a, 22, c, d, 1960)
const fixLast = (a, c) => fix2and5(a, c, 9)
const result = fixLast(1, 2)
console.log(result)
