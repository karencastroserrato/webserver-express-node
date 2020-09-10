const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });

        let salidas = {
            nombre: 'karen',
            apellido: 'castro',
            url: req.url
        }
        res.write(JSON.stringify(salidas));

        //res.write('Creanto http');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');