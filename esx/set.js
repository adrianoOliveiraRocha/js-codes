let set = new Set();
set.add(1);
set.add(2);
set.add({ key: 'value' });
set.forEach(x => {
  console.log(x);
});

let newSet = new Set([1, 2, { key: 'value' }]);
newSet.forEach(function (value) {
  console.log(value);
});

for (const value of newSet) {
  console.log(value);
}

