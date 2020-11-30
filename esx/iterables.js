const iterable = {

  done: false,
  data: ['first element', 'second element', 'third element'],

  next() {
    done = this.done || this.data.length === 0;
    if(done) return {done: true};
    else return {value: this.data.shift()};    
  },

  [Symbol.iterator]() {
    return this;
  }

}

const iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

