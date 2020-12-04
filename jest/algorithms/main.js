'use strict';

function kangaroo(x1, v1, x2, v2){
	var resp = 'NO';
	
	for(let i = 0; i <= 10000; i++) {
		x1 += v1;
		x2 += v2;
		if(x1 == x2) resp = 'YES';
	}

	console.log(resp);
	
}

kangaroo(0,2,5,3);

