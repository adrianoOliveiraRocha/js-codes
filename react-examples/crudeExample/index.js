const express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('running in the port 3000');
});

function getConnection() {
    const connect = require('./config/connect');
    return connect;
}