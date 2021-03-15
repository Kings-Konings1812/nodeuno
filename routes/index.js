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

	router.post('/nuevo-proyecto',body('nombre').not().isEmpty().trim().escape(),
	proyectosController.nuevoProyecto);
    // Listar Proyecto
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl);
	//actualizar proyecto editar
	router.get('/proyecto/editar/:id',
	proyectosController.formularioEditar);
	
	
	return router;
}

