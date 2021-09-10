//Cargar dependencias o modulos 
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');



// Crear la conexión a la BD
const db = require('./config/db');
//importar el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));
    

//crear app de express o funcion

const app = express();

// Donde cargar los archivos estaticos
app.use(express.static('public'));

// Habilitar Pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//habilitar body-parser
app.use(bodyParser.urlencoded({extended: true }));



//Crear rutas
app.use('/',  routes() );



//puerto escucha

app.listen(3000);

