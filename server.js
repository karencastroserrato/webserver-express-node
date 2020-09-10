const express = require('express');
const app = express();
const hbs = require('hbs');
//const { text } = require('express');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //res.send('Hola Mundo')
    /* let salidas = {
        nombre: 'karen',
        apellido: 'castro',
        url: req.url
    } */
    res.render('home', {
        nombre: 'SAMARA',
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

/* app.get('/data', function(req, res) {
    res.send('Hola Mundo')
}) */

app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${port}`);
})