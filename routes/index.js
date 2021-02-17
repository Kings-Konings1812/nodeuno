//cargar las librerias 
const express = require('express');
const router = express.Router();
// importar express validator
const { body } = require('express-validator/check');


//importar el controlador
const proyectosController = require('../controllers/proyectosControllers');
//importar modulos
module.exports = function() {

	router.get('/', proyectosController.proyectosHome);
	
	router.get('/nuevo-proyecto', proyectosController.formularioProyecto);

	router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);

	return router;
}

