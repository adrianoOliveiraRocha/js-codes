/**
 * When in a strict mode, this means window in the browser context
 */

// In methodes
const car = {
  maker: 'Ford',
  model: 'Fiesta',

  drive: function() {
    console.log(`Driving a ${this.maker} ${this.model} car`)
  }  

  /* or
  drive() {
    console.log(`Driving a ${this.maker} ${this.model} car`)
  }
  */
}

car.drive()