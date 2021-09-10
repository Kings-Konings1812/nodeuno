//cargar librerias
const express = require('express');
const router = express.Router();


// importar controlador
const proyectosController = require('../controllers/proyectosController');

//importar modulos 

module.exports = function(){
    // Rutas para el Home / 
     
    router.get('/', proyectosController.proyectosHome);

    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    //enviar informacion
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);

    


    
   
  
    return router;
}








