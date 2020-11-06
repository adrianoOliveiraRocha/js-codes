/*
console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// [ { name: false, count: 2 }, { name: true, count: 3 } ]
*/

function countBy(items, groupName) {
  let counts = [];
  for(let item of items) {
    let name = groupName(item); // true or false
    let known = counts.findIndex(c => c.name == name);
    if(known == -1){
      counts.push({name: name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

module.exports = countBy;
