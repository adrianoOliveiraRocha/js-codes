
function testAjax() {
	
	var xhttp = new XMLHttpRequest()
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
				document.getElementById("response").innerHTML =
				this.responseText;
			}
		else{
			document.getElementById("response").innerHTML = 'Waiting...';
		}
	}

	xhttp.open("GET", '/test_ajax', true);
	xhttp.send()

}
