function anotherFunction() {/**/};

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a: 2,
	b: anotherObject,
	c: anotherArray,
	d: anotherFunction
};

anotherArray.push(anotherObject, myObject);

anotherArray.forEach(el => {
	console.log(el);
});