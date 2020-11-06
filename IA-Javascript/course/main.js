const linearRegressionOO = require('./examples/linearRegressionOO');

const config = {
	input: [1, 2, 3, 4],
	output: [10, 20, 30, 40]
};

const regression = new linearRegressionOO();
regression.train(config);
const result = regression.predict([5, 6, 7, 8]);
console.log(result);