//cargar las librerias 
const express = require('express');
const router = express.Router();
// importar express validator
const { body } = require('express-validator/check');

//importar el controlador
const proyectosController = require('../controllers/proyectosController');
const tareasController = require('../controllers/tareasController');

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
	//actualizar proyecto con post
	router.post('/nuevo-proyecto/:id',body('nombre').not().isEmpty().trim().escape(),
	proyectosController.actualizarProyecto);

	// Eliminar Proyecto
    router.delete('/proyectos/:url', 
        proyectosController.eliminarProyecto
    );
    // Tareas
    router.post('/proyectos/:url', 
        tareasController.agregarTarea
    );
    // Actualizar Tarea
    router.patch('/tareas/:id', 
        tareasController.cambiarEstadoTarea
    );


	
	return router;
}

