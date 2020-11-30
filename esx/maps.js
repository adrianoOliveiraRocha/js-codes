let map = new Map();
val2 = 'val2',
val3 = {
  key: 'value'
};
map.set(0, 'val1');
map.set(1, val2);
map.set({ key: 2 }, val3);

console.log(map.get(0));
console.log(map.get(1));
console.log(map.get(2));

map.forEach(function (value, key) {
  console.log(`Key: ${key} and value: ${value}`);
});

for(let entry of map){
  console.log(`Key: ${entry[0]} has value: ${entry[1]}`);  
}

// another example:
/**
 * 
 * const profiles = new Map();
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');

console.log(profiles.size);
console.log(profiles.has('twitter'));
var twitter = profiles.get('twitter');
console.log(twitter);
profiles.delete('facebook');
if (profiles.has('facebook')) {
  console.log('I alredy have facebook');
} else {
  console.log('I has not facebook any more');
}
for (const entry of profiles) {
  console.log(entry);
}

you can use functions as key

const tests = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*2, 4);
tests.set(() => 2/2, 1);

for (const entry of tests) {
  console.log((entry[0] () === entry[1]) ? 'It is rigth' : 'OOps!! it is wrong');
}

 * 
 */