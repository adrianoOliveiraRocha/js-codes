let okIterator = "OK"[Symbol.iterator]();

for(ok of okIterator) {
	console.log(ok);
}
