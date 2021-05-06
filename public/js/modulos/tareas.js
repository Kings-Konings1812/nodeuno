

const tareas = document.querySelector('.listado-pendientes');

if(tareas) {

    tareas.addEventListener('click', e => {
            
            if(e.target.classList.contains('fa-check-circle')){

            	//console.log('Actualizando....');  abajo sirve para navegar en los niveles 
            const icono = e.target;
            const idTarea = icono.parentElement.parentElement.dataset.tarea;

            console.log(idTarea);
            }
                    
        });

}
        export default tareas;