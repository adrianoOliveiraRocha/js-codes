const SymmetricMatrix = require('./inherintance/models/SymmetricMatrix');
const Matrix = require('./inherintance/models/Matrix');

var m = new SymmetricMatrix(2);
console.log(m instanceof SymmetricMatrix);
console.log(m instanceof Matrix);
