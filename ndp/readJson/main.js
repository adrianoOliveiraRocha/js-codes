// Uncaught exceptions
const fs = require('fs');

function readData(error, data) {
  if (error)
    console.error(`I have a problem in my life: ${error}`);
  else
    for (const key in data) {
      console.log(key, data[key]);
    }
}

function readJSON (filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {

    let parsed;

    if (err) {
      // propragate the error and exit the current function
      return callback(err);
    }

    try {
      //parse the file contents
      parsed = JSON.parse(data);
      
    } catch (err) {
      //catch parsing errors
      return callback(err);
    }
    //no errors, propagate just the data
    callback(null, parsed);
  });
};

readJSON('file.txt', readData);

