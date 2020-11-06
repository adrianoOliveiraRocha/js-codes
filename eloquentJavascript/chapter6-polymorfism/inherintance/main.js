const SymmetricMatrix = require('./models/SymmetricMatrix');

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix);
console.log(matrix.get(2, 3));
console.log(matrix.get(0, 4));


