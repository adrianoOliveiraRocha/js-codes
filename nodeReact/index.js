const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('example-with-state.ejs');
});

app.get('/events', (req, res) => {
    res.render('events/index.ejs');
});

app.listen(3000, () => {
    console.log('server running');
});