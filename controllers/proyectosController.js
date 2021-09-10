const Proyectos = require('../models/Proyectos');


exports.proyectosHome = (req, res) => {
    res.render('index' , {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto' , {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = (req, res) => {
    //enviar a la consola
    //console.log(req.body); 

    //validar lo que tenemos en el input de Form Nombre Proyecto
    const { nombre } = req.body ;

    let errores = [];

    if(!nombre){
        errores.push({'texto': 'Debes poner un Nombre al Proyecto'})
    }

    //cuando no este vacia
    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores 
        })    
    }
    else{
        //aqui voy a insertar los nuevos registros.
        // No hay errores
        // Insertar en la BD.
       // await Proyectos.create({ nombre, usuarioId });
        res.redirect('/');
    }

}



