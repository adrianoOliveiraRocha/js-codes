function testConfirm(argument) {
	var answer = confirm("Ready to move on?");
	answer ? console.log('confirmed') : console.log('not confirmed');
}