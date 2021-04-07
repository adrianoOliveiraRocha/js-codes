'strict'
// using clousures to encapsulate private variables

const moduleName = function() {
	let privateState = 0;
	this.privateFunction = function() {
		console.log("My private function: " + privateState);
	}

	return {
		publicState: 1,
		publicFunction() {
			console.log('My public function');
			console.log("My private state: ", privateState);
			// console.log(privateFunction());
		}
	}
}

const mn = new moduleName();
console.log(mn.publicState);
mn.publicFunction();
mn.privateFunction();