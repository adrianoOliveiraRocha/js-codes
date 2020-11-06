/**
 * Pattern (observer) defines an object (called subject), which can notify 
 * a set of observers (or listeners), when a change in its state happens.
 */
const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

function findPattern(files, regex) {
  const emitter = new EventEmitter();
  files.forEach((file) => {
    fs.readFile(file, 'utf-8', (err, content) => {
      if (err) {
        return emitter.emit('error', err);
      }
      emitter.emit('content', content);
      emitter.emit('fileread', file);
      let match;
      if (match = content.match(regex)) {
        match.forEach(elem => emitter.emit('found', file, elem));
      }
    });
  });
  return emitter;
};

findPattern(
  ['fileA.txt', 'fileB.json'],
  /hello \W+/g
)
.on('fileread', (file) => { console.log(file + ' was read\n'); })
.on('found', (file, match) => { console.log(`Matched ${match} in file ${file}\n`); })
.on('error', (err) => { console.log(`Error emitted: ${err.message}\n`) })
.on('content', (content) => {
  myFunction(content);
});

function myFunction(content) {
  console.log(`That is how I can take a result and use outside the callback. 
  I can show the content of file here: ${content}`)
}