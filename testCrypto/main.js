const encrypt = require('./encrypt.js').encrypt;
const decrypt = require('./encrypt.js').decrypt;
const connect = require('./connect.js');


// Insert data
/*
var hash = encrypt('453231');

var user = {
	userName: 'Adriano Oliveira',
	pwd: hash,
	email: 'adriano.qwe32@gmail.com'
};

var queryInsert = `insert into user (username, pwd, email)
values('${user.userName}', '${user.pwd}', '${user.email}')`;

connect.query(queryInsert, (err, result) => {
	if (err) {
		console.error(err);
	} 
	else {
		console.log(result);
	}
});
*/


// Recover data
/*
var hash = encrypt('453231');

var querySelect = `select * from user where pwd = '${hash}'`;
connect.query(querySelect, (err, result) => {
	if (err) {
		console.error(err);
	} 
	else {
		console.log(result);
		console.log(decrypt(result[0].pwd));
	}
});
*/

