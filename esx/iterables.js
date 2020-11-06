// example 0
const myFavouriteAuthors = {

  allAthors: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowing',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stenphenson',
      'Arthur Clark',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowing',
      'Terry Pratchett'
    ]
  },

  getAllAuthrs() {
    const authors = [];
    for (const author of this.allAthors.fiction) {
      authors.push(author);
    }
    for (const author of this.allAthors.scienceFiction) {
      authors.push(author);
    }
    for (const author of this.allAthors.fantasy) {
      authors.push(author);
    }
    return authors;
  }

}

console.log('example 0:');
console.log(myFavouriteAuthors.getAllAuthrs());

// example 1
const iterable = {
  [Symbol.iterator]() {

    let step = 0;
    const iterator = {

      next() {
        step++;
        if (step === 1) {
          return { value: 'This', done: false };
        } else if (step === 2) {
          return { value: 'is', done: false };
        } else if (step === 3) {
          return { value: 'iterable.', done: false };
        }
        return { value: undefined, done: true };
      }

    };
    return iterator;
  }
}
console.log('example 1:');
var iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// example 2
const data = ['adriano', 'analyst programmer', 'javascript'];
const iterator = data[Symbol.iterator]();
const name = iterator.next().value;
const profession = iterator.next().value;
const language = iterator.next().value;
console.log(name, profession, language);

//implementing an iterable
const iterable = {
  data: ['foo', 'bar'],
  next() {
    return {
      done: this.data.length === 0,
      value: this.data.pop()
    }
  },
  [Symbol.iterator]() {
    return this
  }
} 

//example 3
const myFavouriteAuthors = {
  allAuthors: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett'
    ],
  },
  [Symbol.iterator]() {
    // Get all the authors in an array
    const genres = Object.values(this.allAuthors);
    // Store the current genre and author index
    let currentAuthorIndex = 0;
    let currentGenreIndex = 0;

    return {
      // Implementation of next()
      next() {
        // authors according to current genre index
        const authors = genres[currentGenreIndex];
        // doNotHaveMoreAuthors is true when the authors array is exhausted.
        // That is, all items are consumed.
        const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
        if (doNothaveMoreAuthors) {
          // When that happens, we move the genre index to the next genre
          currentGenreIndex++;
          // and reset the author index to 0 again to get new set of authors
          currentAuthorIndex = 0;
        }
        // if all genres are over, then we need tell the iterator that we 
        // can not give more values.
        const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
        if (doNotHaveMoreGenres) {
          // Hence, we return done as true.
          return {
            value: undefined,
            done: true
          };
        }
        // if everything is correct, return the author from the 
        // current genre and incerement the currentAuthorindex
        // so next time, the next author can be returned.
        return {
          value: genres[currentGenreIndex][currentAuthorIndex++],
          done: false
        }
      }
    };
  }
};
for (const author of myFavouriteAuthors) {
  console.log(author);
}
console.log(...myFavouriteAuthors)

// others ways for to iter
for (const pair of new Map([['foo', 'Mr.Foo'], ['bar', 'Mr.Bar']])) {
  console.log(pair);
}

for (const pair of new Set(['foo', 'bar'])) {
  console.log(pair);
}

function foo() {
  if (arguments.length > 0) {
    for (let e of arguments) {
      console.log(e);
    }
  } else {
    console.log('I have not arguments');
  }
}
console.log('\n\n');

foo('bar', 'zed');
foo();

//example 4
const iterable = {
  done: false,
  data: ['foo', 'bar', 'zed'],
  next() {
    done = this.done || this.data.length === 0
    return done ?
      // After 'return' is called the object returned by 'next' should also be done.
      {
        done: true
        // We can ignore the 'value' when 'done' is 'true'.
      } : {
        value: this.data.pop()
        // We can ignore 'done' when is 'false'.
      }
  },
  // Not all iterators implement the return method.
  // Those who implement are called closable.
  // The 'return' method should return an object { done: true, value: _any_ }.
  return() {
    this.done = true
    return {
      done: true
    }
  },
  [Symbol.iterator]() {
    return this
  }
}
const iterator = iterable[Symbol.iterator]()
console.log(iterator.next()) // { done: false, value: 'zed' }
console.log(iterator.return()) // { done: true }
console.log(iterator.next()) // { done: true }

// You can get index and value of a array via for of using entries
for (const [i, v] of [1, 5, 2, 54, 223, 54].entries()) {
  console.log(i, v);
}

// This is a way to interate with a object
const person = {
  name: 'Adriano',
  cpf: '85215856320'
}

for (const el of Object.entries(person)) {
  console.log(el) // The response is a array with key and value for each one
}

for (const arr of Object.values(person)) {
  console.log(arr) // It return each value
}