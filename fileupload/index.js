const express = require('express');
const fileUpload = require('express-fileupload');
var app = express();
app.use(fileUpload());

app.set('view engine', 'ejs'); 
app.set('views', './views');

app.post('/upload', function (req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let prefix = new Date().getTime() + '_';
  let fileName = prefix + req.files.sampleFile.name;
  let sampleFile = req.files.sampleFile;
  sampleFile.mv('./uploaded/' + fileName, function(err){
    if (err) {
      return res.status(500).send(err);
    }
    res.send(`File ${fileName} uploadded with success!`);
  });

});

app.get('/', function(req, res) {
  res.render('home.ejs');
});

app.listen(8000, function () {
  console.log('listen in port 8000');
})