let tareas = new Array()
let sectionTareas = document.querySelector('#sectionTareas');
let sectionForm = document.querySelector('#sectionForm');

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
    tareas.forEach(tarea => (
        sectionTareas.innerHTML += `<article>${tarea.titulo}</article>`
    ))
}

function createForm(){
    let inputForm = document.querySelector('#inputForm');
    let selectForm = document.querySelector('#selectForm');

    let nuevaTarea = {idTarea: 3, titulo: inputForm.value, prioridad:selectForm.value}
    tareas.push(nuevaTarea)
    sectionTareas.innerHTML = ""
    tareas.forEach(tarea => (
        sectionTareas.innerHTML += `<article>${tarea.titulo}</article>`
    ))
}

printTareas();




