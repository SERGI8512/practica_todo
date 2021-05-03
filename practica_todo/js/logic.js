let tareas = new Array()
let sectionTareas = document.querySelector('#sectionTareas');

tareas = [
    {
        idTarea : 0, titulo : "pasear perro", prioridad : "diaria"
    },
    {
        idTarea : 1, titulo : "follar", prioridad : "urgente"
    },
    {
        idTarea : 2, titulo : "pagar alquiler", prioridad : "mensual"
    }
]

function printTareas(){
    console.log(tareas);
    tareas.forEach(tarea => (
sectionTareas.innerHTML += `<article>${tarea.titulo}</article>`
    ))
}

printTareas();