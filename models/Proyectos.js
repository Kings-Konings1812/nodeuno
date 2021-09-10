const Sequelize = require('sequelize');
const db = require('../config/db');

//Crear la base de Datos

const Proyectos = db.define('proyectos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING(100),
    
    url : Sequelize.STRING(100)

});

