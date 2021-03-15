//cargar librerias
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


// helpers con algunas funciones
const helpers = require('./helpers');

// Crear la conexión a la BD
const db = require('./config/db');

// Importar el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));


//crea una app 

const app = express();

// donde cargar los archivos estaticos css
app.use(express.static('public'));

//habilitar pug
app.set('view engine', 'pug');
// añadir la carpeta de vistas
app.set('views', path.join(__dirname, './views'));


// Pasar var dump a la aplicación
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
});
// habilitar bodyParser para leer del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes() );

//servidor  puerto de escucha

app.listen(3000);


