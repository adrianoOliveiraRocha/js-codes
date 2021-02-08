function addToDom(id) {
	let newElement = document.createElement("div");
	newElement.id = id;
	return newElement;
}

function h1() {
	return "h1";
}

function echo() {
	return console.log;
}

function run(element, type, log) {
	return function(message) {
		console.log(`
			message: ${message}
			element: ${element};
			type: ${type()};
			log: ${log()};
		`);
	}	
}

const printMessage = run(addToDom('msg'), h1, echo);

printMessage("My new message");