function printMessage(elementId, format, message) {
	document.getElementById(`${elementId}`).innerHTML = `<${format}>${message}<${format}/>`;
}

printMessage('msg', 'h1', "The querySelector doesn't works any more");