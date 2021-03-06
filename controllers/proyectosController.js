
const Proyectos = require('../models/Proyectos');
const Tareas = require('../models/Tareas');
//const slug = require('slug');


exports.proyectosHome = async (req, res) => {
	const proyectos = await Proyectos.findAll();
	//SELECT * from proyectos;
	res.render('index', {
		nombrePagina : 'Proyectos',
		proyectos
	});
}
exports.formularioProyecto = async(req, res) => {
	const proyectos = await Proyectos.findAll();
	res.render('nuevoProyecto', {
		nombrePagina : 'Nuevo Proyecto',
		proyectos
	});
}

exports.nuevoProyecto = async (req, res) => {
	const proyectos = await Proyectos.findAll();
	//validar que tengamos algo en el input
	const { nombre } = req.body;

	let errores = [];

	if(!nombre) {
		errores.push({'texto' : 'Agrega un Nombre al Proyecto'})
	}
	//si hay errores
	if(errores.length > 0){
		res.render('nuevoProyecto', {
			nombrePagina : 'Nuevo Proyecto',
			errores, 
			proyectos
		})
	} else {

	   const proyecto = await Proyectos.create({ nombre });
		res.redirect('/');
    }
}

exports.proyectoPorUrl = async(req , res, next )=> {
	const proyectosPromise = Proyectos.findAll();
	
	const proyectoPromise = Proyectos.findOne({
		where: {
			url: req.params.url
		}		
	});
	const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);

	    // Consultar tareas del Proyecto actual anterior debe cargar primero

		const tareas = await Tareas.findAll({
			where: {
				proyectoId : proyecto.id
			},
			// include: [
			//     { model: Proyectos }
			// ]
		});
		//console.log(tareas);
	
	if(!proyecto) return next();
	//console.log(proyecto);
	//res.send('ok fine de proyecto url');
	
	// render a la vista
    res.render('tareas', {
        nombrePagina : 'Tareas del Proyecto',
        proyecto,
        proyectos,
		tareas 
    })
}
exports.formularioEditar = async(req, res) => {
	
	const proyectosPromise = Proyectos.findAll();
	
	const proyectoPromise = Proyectos.findOne({
		where: {
			id: req.params.id
		}		
	});
	const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);
	
	//render a la vista
	res.render('nuevoProyecto', {
        nombrePagina : 'Editar Proyecto',
        proyecto,
		proyectos
	})
}
	//contolador actualizar
	exports.actualizarProyecto = async (req, res) => {
		const proyectos = await Proyectos.findAll();
		//validar que tengamos algo en el input
		const { nombre } = req.body;	
		let errores = [];
	
		if(!nombre) {
			errores.push({'texto' : 'Agrega un Nombre al Proyecto'})
		}
		//si hay errores
		if(errores.length > 0){
			res.render('nuevoProyecto', {
				nombrePagina : 'Nuevo Proyecto',
				errores, 
				proyectos
			})
		} else {
			await Proyectos.update(
				{ nombre },
				{ where: { id: req.params.id}}
				);
		   //const proyecto = await Proyectos.update({ nombre });
			res.redirect('/');
		}
	}

	//eliminar Proyecto

	exports.eliminarProyecto = async (req, res, next) => {
    // req, query o params
    // console.log(req.query);  <-- con este podemos ver que estamos solicitando y lo vemos en la terminal req solo y query
    const {urlProyecto} = req.query;

    const resultado = await Proyectos.destroy({where: { url : urlProyecto}});
    //<-  aplicando posible error de que no exista o no se pueda borrar por la comnuicacion entre el servidor
    if(!resultado){
        return next();
    }
    //200 correctamente
    res.status(200).send('Proyecto Eliminado Correctamente');
}