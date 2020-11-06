const fs = require('fs');

async function test() {
    return await new Promise((resolve, reject) => {
        fs.readFile('file.txt', 'utf-8', (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

test()
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.error(err);
    });