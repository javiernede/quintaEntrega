const express = require('express')
const morgan = require('morgan')
const multer = require('multer')



/*instancia de server*/
const app = express();
const routerMascotas = require('./src/routes/mascotas.routes.js');
const routerPersonas = require('./src/routes/personas.routes.js');

/********************************Middlewares********************************************** */

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    console.log('Middleware de app se ejecuta con todos')
    next()
})

app.use((req, res, next) => {
        console.log('Middleware2 de app se ejecuta con todos')
        next()
    })
    /********************************segmentos de rutas****************************************/

app.use('/api/mascotas', routerMascotas);
app.use('/api/personas', routerPersonas);

/*app.use(function(err, req, res, next) {
    res.status(err.status || 500).send('Something broke!');
})*/

/********************************Servidor**************************************************/
const PORT = 8081;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})

server.on('error', error => {
    console.error(`Error en el servior ${error}`)
})